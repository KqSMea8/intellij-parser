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

command: comments? shellCommand redirection?;

shellCommand:
	forCommand
	| caseCommand
	| (WHILE | UNTIL) doubleBracketList DO list DONE
	| selectCommand
	| ifCommand
	| subshell
	| groupCommand
	| customCommand
	| echoCommand
	| functionDef
	| word (EQUAL_SYMBOL word)?;

bracketList: LEFT_SQUARE_BRACKET? list RIGHT_SQUARE_BRACKET?;

doubleBracketList: LEFT_SQUARE_BRACKET? bracketList RIGHT_SQUARE_BRACKET?;

echoCommand: ECHO word;

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
	IF LEFT_SQUARE_BRACKET? list RIGHT_SQUARE_BRACKET? THEN list (
		ELSE list
		| elifClause
	)? IF_END;

groupCommand: LEFT_BRACE list RIGHT_BRACE;

elifClause: ELSE_END list THEN list ( ELSE list | elifClause)?;

caseClause: patternList (DOUBLE_SEMI patternList)?;

customCommand: linuxCommand;

patternList: LEFT_BRACKET? pattern RIGHT_BRACKET list;

pattern: word ( BIT_OR_OP word)*;

list:
	pipelineCommand (
		(AND | OR | BIT_AND_OP | SEMI) pipelineCommand
	)*;

pipelineCommand: (
		(EXCLAMATION_SYMBOL timespec?)
		| (timespec EXCLAMATION_SYMBOL?)
	)? command;

timeOpt: TIME_OPT;

timespec: TIME timeOpt?;

linuxCommand: fileManagementCmd;

fileManagementCmd: touchCmd | chmodCmd;

touchCmd:
	TOUCH (
		HYPHEN (
			OPTION_A_LOWER
			| OPTION_M_LOWER
			| OPTION_C_LOWER
			| OPTION_F_LOWER
			| OPTION_R_LOWER
			| OPTION_D_LOWER
			| OPTION_T_LOWER
		)+
	)*
	| (DOUBLE_HYPHEN NO_CREATE) ID;

chmodCmd:
	CHMOD (
		HYPHEN (
			OPTION_C_LOWER
			| OPTION_F_LOWER
			| OPTION_V_LOWER
			| OPTION_R
		)+
	)? chmodMode ID;

chmodMode: (
		(
			OPTION_U_LOWER
			| OPTION_G_LOWER
			| OPTION_O_LOWER
			| OPTION_A_LOWER
		) (minus | ADD | EQUAL_SYMBOL) (
			OPTION_R_LOWER
			| OPTION_W_LOWER
			| OPTION_X_LOWER
			| OPTION_X
		)
	)
	| DIGIT_TO_SEVEN;

// 通过额外的subRule提醒service和HYPHEN区别
minus: HYPHEN;