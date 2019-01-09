root: pipelineCommand?;

number: DIGIT;

word: LETTER;

wordList: word+;

assignmentWord: word (EQUAL_SYMBOL word)?;

redirection:
	(
		RIGHT_REDIRECTION BIT_OR_OP?
		| LEFT_REDIRECTION RIGHT_REDIRECTION?
		| LEFT_REDIRECTION_WITH_MERGE
		| RIGHT_REDIRECTION_WITH_MERGE
		| RIGHT_REDIRECTION_WITH_ADD
		| LEFT_REDIRECTION_WITH_ADD HYPHEN?
		| DESCRIPTOR_TO_FILE
	) word
	| number (
		RIGHT_REDIRECTION BIT_OR_OP?
		| LEFT_REDIRECTION RIGHT_REDIRECTION?
		| RIGHT_REDIRECTION_WITH_ADD
		| LEFT_REDIRECTION_WITH_ADD HYPHEN?
		| LEFT_REDIRECTION_WITH_MERGE
		| RIGHT_REDIRECTION_WITH_MERGE
	) word
	| number? (
		RIGHT_REDIRECTION_WITH_MERGE
		| LEFT_REDIRECTION_WITH_MERGE
	) (HYPHEN | number);

command: shellCommand? redirection*;

shellCommand:
	forCommand
	| caseCommand
	| (WHILE | UNTIL) compoundList DO compoundList DONE
	| selectCommand
	| ifCommand
	| subshell
	| groupCommand
	| customCommand
	| functionDef;

forCommand: FOR word IN wordList listTerminator forCommandBody;

forCommandBody:
	DO compoundList DONE
	| LEFT_BRACE compoundList RIGHT_BRACE;

selectCommand:
	SELECT word IN wordList listTerminator selectCommandBody;

selectCommandBody: DO list DONE | groupCommand;

caseCommand: CASE word IN caseClause CASE_END;

functionDef:
	FUNCTION? word LEFT_BRACKET RIGHT_BRACKET newlineList groupCommand
	| FUNCTION word newlineList groupCommand
	| word (EQUAL_SYMBOL word)?;

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

caseClause: patternList (DOUBLE_SEMI patternList)?;

customCommand: linuxCommand;

patternList:
	newlineList LEFT_BRACKET? pattern RIGHT_BRACKET (
		compoundList
		| newlineList
	);

pattern: word ( BIT_OR_OP word)*;

list: newlineList list0;

compoundList: newlineList list0;

listTerminator: LINE_FEED | SEMI;

list0: list1 ((LINE_FEED | BIT_AND_OP | SEMI) newlineList)?;

list1:
	pipelineCommand (
		(AND | OR | BIT_AND_OP | SEMI) newlineList pipelineCommand
	)+;

newlineList: LINE_FEED+;

simpleList: list1 (BIT_AND_OP | SEMI)?;

pipelineCommand:
	pipeline
	| EXCLAMATION_SYMBOL pipeline
	| timespec pipeline
	| timespec EXCLAMATION_SYMBOL pipeline
	| EXCLAMATION_SYMBOL timespec pipeline;

pipeline: command (BIT_OR_OP newlineList command)+;

timeOpt: TIME_OPT;

timespec: TIME timeOpt?;

// linux

linuxCommand: fileManagementCmd;
// | documentCmd | diskManagementCmd | diskMaintenanceCmd | systemManageCmd | systemCmd |
// compressCmd equipCmd | fileTransCmd | netWorkCmd;

fileManagementCmd:
	touchCmd
	// | removeCmd | viCmd | copyCmd | moveCmd | catCmd | moreCmd | scpCmd | tailCmd
	| chmodCmd;

// documentCmd: grepCmd;

// diskManagementCmd: treeCmd | lsCmd;

// diskMaintenanceCmd: ddCmd;

// systemManageCmd: addUserCmd | killCmd | exicCmd | sleepCmd;

// systemCmd: clearCmd | aliasCmd;

// compressCmd: zipCmd | unzipCmd | gzipCmd | bzip2Cmd | tarCmd;

touchCmd:
	TOUCH (HYPHEN (a | m | c | f | r | d | t)+)*
	| (DOUBLE_HYPHEN NO_CREATE) FILEPATH;

chmodCmd: CHMOD (HYPHEN (c | f | v | R)+)* chmodMode FILEPATH;

chmodMode: (u | g | o | a) (MINUS | ADD | EQUAL_SYMBOL) (
		r
		| w
		| x
		| X
	);