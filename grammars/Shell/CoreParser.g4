number: DIGIT | (number DIGIT);

word: LETTER | word LETTER | word UNDERLINE;

word_list: word | word_list word;

assignment_word: word EQUAL_SYMBOL word;

redirection:
	RIGHT_REDIRECTION word
	| LEFT_REDIRECTION word
	| number RIGHT_REDIRECTION word
	| number LEFT_REDIRECTION word
	| RIGHT_REDIRECTION_WITH_ADD word
	| number RIGHT_REDIRECTION_WITH_ADD word
	| LEFT_REDIRECTION_WITH_ADD word
	| number LEFT_REDIRECTION_WITH_ADD word
	| LEFT_REDIRECTION_WITH_MERGE number
	| number LEFT_REDIRECTION_WITH_MERGE number
	| RIGHT_REDIRECTION_WITH_MERGE number
	| number RIGHT_REDIRECTION_WITH_MERGE number
	| LEFT_REDIRECTION_WITH_MERGE word
	| number LEFT_REDIRECTION_WITH_MERGE word
	| RIGHT_REDIRECTION_WITH_MERGE word
	| number RIGHT_REDIRECTION_WITH_MERGE word
	| LEFT_REDIRECTION_WITH_ADD HYPHEN word
	| number LEFT_REDIRECTION_WITH_ADD HYPHEN word
	| RIGHT_REDIRECTION_WITH_MERGE HYPHEN
	| number RIGHT_REDIRECTION_WITH_MERGE HYPHEN
	| LEFT_REDIRECTION_WITH_MERGE HYPHEN
	| number LEFT_REDIRECTION_WITH_MERGE HYPHEN
	| DESCRIPTOR_TO_FILE word
	| number LEFT_REDIRECTION RIGHT_REDIRECTION word
	| LEFT_REDIRECTION RIGHT_REDIRECTION word
	| RIGHT_REDIRECTION BIT_OR_OP word
	| number RIGHT_REDIRECTION BIT_OR_OP word;

simple_command_element: word | assignment_word | redirection;

redirection_list: redirection | redirection_list redirection;

simple_command:
	simple_command_element
	| simple_command simple_command_element;

command:
	simple_command
	| shell_command
	| shell_command redirection_list;

shell_command:
	for_command
	| case_command
	| WHILE compound_list DO compound_list DONE
	| until compound_list DO compound_list DONE
	| select_command
	| if_command
	| subshell
	| group_command
	| function_def;

for_command:
	FOR word newline_list DO compound_list DONE
	| FOR word newline_list LEFT_BRACE compound_list RIGHT_BRACE
	| FOR word SEMI newline_list DO compound_list DONE
	| FOR word SEMI newline_list LEFT_BRACE compound_list RIGHT_BRACE
	| FOR word newline_list IN word_list list_terminator newline_list DO compound_list DONE
	| FOR word newline_list IN word_list list_terminator newline_list LEFT_BRACE compound_list
		RIGHT_BRACE;

select_command:
	SELECT word newline_list DO list DONE
	| SELECT word newline_list LEFT_BRACE list RIGHT_BRACE
	| SELECT word SEMI newline_list DO list DONE
	| SELECT word SEMI newline_list LEFT_BRACE list RIGHT_BRACE
	| SELECT word newline_list IN word_list list_terminator newline_list DO list DONE
	| SELECT word newline_list IN word_list list_terminator newline_list LEFT_BRACE list RIGHT_BRACE
		;

case_command:
	CASE word newline_list IN newline_list CASE_END
	| CASE word newline_list IN case_clause_sequence newline_list CASE_END
	| CASE word newline_list IN case_clause CASE_END;

function_def:
	word LEFT_BRACKET RIGHT_BRACKET newline_list group_command
	| FUNCTION word LEFT_BRACKET RIGHT_BRACKET newline_list group_command
	| FUNCTION word newline_list group_command;

subshell: LEFT_BRACKET compound_list RIGHT_BRACKET;

if_command:
	IF compound_list THEN compound_list IF_END
	| IF compound_list THEN compound_list ELSE compound_list IF_END
	| IF compound_list THEN compound_list elif_clause IF_END;

group_command: LEFT_BRACE list RIGHT_BRACE;

elif_clause:
	ELSE_END compound_list THEN compound_list
	| ELSE_END compound_list THEN compound_list ELSE compound_list
	| ELSE_END compound_list THEN compound_list elif_clause;

case_clause: pattern_list | case_clause_sequence pattern_list;

pattern_list:
	newline_list pattern RIGHT_BRACKET compound_list
	| newline_list pattern RIGHT_BRACKET newline_list
	| newline_list LEFT_BRACKET pattern RIGHT_BRACKET compound_list
	| newline_list LEFT_BRACKET pattern RIGHT_BRACKET newline_list;

case_clause_sequence:
	pattern_list DOUBLE_SEMI
	| case_clause_sequence pattern_list DOUBLE_SEMI;

pattern: word | pattern BIT_OR_OP word;

list: newline_list list0;

compound_list: list | newline_list list1;

list0:
	list1 LINE_FEED newline_list
	| list1 BIT_AND_OP newline_list
	| list1 SEMI newline_list;

list1:
	list1 AND newline_list list1
	| list1 OR newline_list list1
	| list1 BIT_AND_OP newline_list list1
	| list1 SEMI newline_list list1
	| list1 LINE_FEED newline_list list1
	| pipeline_command;

list_terminator: LINE_FEED | SEMI;

newline_list: | newline_list LINE_FEED;

simple_list:
	simple_list1
	| simple_list1 BIT_AND_OP
	| simple_list1 SEMI;

simple_list1:
	simple_list1 AND newline_list simple_list1
	| simple_list1 OR newline_list simple_list1
	| simple_list1 BIT_AND_OP simple_list1
	| simple_list1 SEMI simple_list1
	| pipeline_command;

pipeline_command:
	pipeline
	| EXCLAMATION_SYMBOL pipeline
	| timespec pipeline
	| timespec EXCLAMATION_SYMBOL pipeline
	| EXCLAMATION_SYMBOL timespec pipeline;

pipeline: pipeline BIT_OR_OP newline_list pipeline | command;

time_opt: TIME_OPT;

timespec: time | time time_opt;
