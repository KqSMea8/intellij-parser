number: DIGIT;

word: LETTER (UNDERLINE)?;

wordList: word+;

assignmentWord: word EQUAL_SYMBOL word;

redirection:
	(
		RIGHT_REDIRECTION
		| LEFT_REDIRECTION
		| LEFT_REDIRECTION_WITH_MERGE
		| RIGHT_REDIRECTION_WITH_MERGE
		| RIGHT_REDIRECTION_WITH_ADD
		| LEFT_REDIRECTION_WITH_ADD
		| DESCRIPTOR_TO_FILE
		| (LEFT_REDIRECTION_WITH_ADD HYPHEN)
		| (LEFT_REDIRECTION RIGHT_REDIRECTION)
		| (RIGHT_REDIRECTION BIT_OR_OP)
	) word
	| number (
		RIGHT_REDIRECTION
		| LEFT_REDIRECTION
		| RIGHT_REDIRECTION_WITH_ADD
		| LEFT_REDIRECTION_WITH_ADD
		| LEFT_REDIRECTION_WITH_MERGE
		| RIGHT_REDIRECTION_WITH_MERGE
		| (LEFT_REDIRECTION RIGHT_REDIRECTION)
		| (RIGHT_REDIRECTION BIT_OR_OP)
		| (LEFT_REDIRECTION_WITH_ADD HYPHEN)
	) word
	| number? (
		RIGHT_REDIRECTION_WITH_MERGE
		| LEFT_REDIRECTION_WITH_MERGE
	) (HYPHEN | number);

simpleCommandElement: word | assignmentWord | redirection;

redirectionList: redirection+;

simpleCommand: simpleCommandElement+;

command: simpleCommand | shellCommand redirectionList?;

shellCommand:
	forCommand
	| caseCommand
	| (WHILE | UNTIL) compoundList DO compoundList DONE
	| selectCommand
	| ifCommand
	| subshell
	| groupCommand
	| functionDef;

forCommand:
	FOR word (
		SEMI? newlineList
		| newlineList IN wordList listTerminator newlineList
	) forCommandBody;

forCommandBody:
	DO compoundList DONE
	| LEFT_BRACE compoundList RIGHT_BRACE;

selectCommand:
	SELECT word (
		SEMI? newlineList
		| newlineList IN wordList listTerminator newlineList
	) selectCommandBody;

selectCommandBody: DO list DONE | groupCommand;

caseCommand:
	CASE word newlineList IN (
		newlineList
		| caseClauseSequence newlineList
		| caseClause
	) CASE_END;

functionDef:
	(FUNCTION? word LEFT_BRACKET RIGHT_BRACKET | FUNCTION word) newlineList groupCommand;

subshell: LEFT_BRACKET compoundList RIGHT_BRACKET;

ifCommand:
	IF compoundList THEN compoundList (
		ELSE compoundList
		| elifClause
	)? IF_END;

groupCommand: LEFT_BRACE list RIGHT_BRACE;

elifClause:
	ELSE_END compoundList THEN compoundList (
		ELSE compoundList
		| elifClause
	)?;

caseClause: caseClauseSequence? patternList;

patternList:
	newlineList LEFT_BRACKET? pattern RIGHT_BRACKET (
		compoundList
		| newlineList
	);

caseClauseSequence: (patternList DOUBLE_SEMI)+;

pattern: word | pattern BIT_OR_OP word;

list: newlineList list0;

compoundList: list | newlineList list1;

list0: list1 (LINE_FEED | BIT_AND_OP | SEMI) newlineList;

list1:
	list1 AND newlineList list1
	| list1 OR newlineList list1
	| list1 BIT_AND_OP newlineList list1
	| list1 SEMI newlineList list1
	| list1 LINE_FEED newlineList list1
	| pipelineCommand;

listTerminator: LINE_FEED | SEMI;

newlineList: | newlineList LINE_FEED;

simpleList: simpleList1 (BIT_AND_OP | SEMI)?;

simpleList1:
	simpleList1 AND newlineList simpleList1
	| simpleList1 OR newlineList simpleList1
	| simpleList1 BIT_AND_OP simpleList1
	| simpleList1 SEMI simpleList1
	| pipelineCommand;

pipelineCommand:
	pipeline
	| EXCLAMATION_SYMBOL pipeline
	| timespec pipeline
	| timespec EXCLAMATION_SYMBOL pipeline
	| EXCLAMATION_SYMBOL timespec pipeline;

pipeline: pipeline BIT_OR_OP newlineList pipeline | command;

timeOpt: TIME_OPT;

timespec: TIME timeOpt?;
