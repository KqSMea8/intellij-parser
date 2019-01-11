root: pipelineCommands?;

pipelineCommands: pipelineCommand*;

number: DIGIT;
word: ID;

wordList: word+;

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

comments: COMMENT;

command: comments* shellCommand redirection?;

expression:
	word (
		(EQUAL_SYMBOL | ADD | HYPHEN | MULTI | DEVIDE) (
			word
			| STRING_LITERAL
			| DOLLAR_WITH_LEFT_BRACKET list RIGHT_BRACKET
		)
	)?;

shellCommand:
	forCommand
	| caseCommand
	| (WHILE | UNTIL) bracketList DO list DONE
	| selectCommand
	| ifCommand
	| subshell
	| groupCommand
	| customCommand
	| echoCommand
	| functionDef
	| expression;

condition:
	EXCLAMATION_SYMBOL? word (
		(
			EQUAL_TO
			| NOT_EQUAL_TO
			| LEFT_REDIRECTION
			| RIGHT_REDIRECTION
			| NOT_SMALLER
			| NOT_GREATER
			| EQUAL_TO_SYMBOL
			| NOT_EQUAL_TO_SYMBOL
			| SMALLER_SYMBOL
			| GREATER_SYMBOL
			| NOT_SMALLER_SYMBOL
			| NOT_GREATER_SYMBOL
		) (word | STRING_LITERAL)
	)? ((AND | OR) condition)*;

bracketList:
	(LEFT_SQUARE_BRACKET | DOUBLE_LEFT_SQUARE_BRACKET)? condition (
		RIGHT_SQUARE_BRACKET
		| DOUBLE_RIGHT_SQUARE_BRACKET
	)?;

echoCommand: ECHO (word | STRING_LITERAL)?;

forCommand: FOR word IN wordList SEMI forCommandBody;

forCommandBody: DO list DONE | LEFT_BRACE list RIGHT_BRACE;

selectCommand: SELECT word IN wordList SEMI selectCommandBody;

selectCommandBody: DO list DONE | groupCommand;

caseCommand: CASE word IN caseClause CASE_END;

functionDef:
	word LEFT_BRACKET RIGHT_BRACKET groupCommand
	| FUNCTION word (LEFT_BRACKET RIGHT_BRACKET)? groupCommand;

subshell: LEFT_BRACKET list RIGHT_BRACKET;

ifCommand:
	IF LEFT_SQUARE_BRACKET? condition RIGHT_SQUARE_BRACKET? THEN list (
		ELSE list
		| elifClause
	)? IF_END;

groupCommand: LEFT_BRACE list RIGHT_BRACE;

elifClause:
	ELSE_IF condition THEN list (ELSE list | elifClause)?;

caseClause: patternList (DOUBLE_SEMI patternList)?;

customCommand: linuxCommand | pythonCommand;

patternList: LEFT_BRACKET? pattern RIGHT_BRACKET list;

pattern: word ( BIT_OR_OP word)*;

list:
	pipelineCommand (
		(AND | OR | BIT_AND_OP | SEMI | BIT_OR_OP)? pipelineCommand
	)*;

pipelineCommand: (
		(EXCLAMATION_SYMBOL timespec?)
		| (timespec EXCLAMATION_SYMBOL?)
	)? command;

timeOpt: TIME_OPT;

timespec: TIME timeOpt?;

pythonCommand: (PYTHON | PIP) word*;

linuxCommand: fileManagementCmd;

fileManagementCmd:
	touchCmd
	| chmodCmd
	| exitCmd
	| sleepCmd
	| catCmd
	| chownCmd;

sleepCmd: SLEEP DIGIT;

exitCmd: EXIT ID;

touchCmd: TOUCH (cliOpt | NO_CREATE)? ID;

chmodCmd: CHMOD cliOpt? cliModeChmod ID;

cliOpt: ID;

cliModeChmod:
	CLI_CHMOD_MOD (COMMA CLI_CHMOD_MOD)*
	| DIGIT_TO_SEVEN;

catCmd: CAT cliOpt? ID;

chownCmd: CHOWN cliOpt? ID (COLON ID)? ID;
// 通过额外的subRule提醒service和HYPHEN区别
minus: HYPHEN;