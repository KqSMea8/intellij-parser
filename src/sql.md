// sqlite 语法
// https://github.com/antlr/grammars-v4/blob/master/sqlite/SQLite.g4

select_or_values
: K_SELECT ( K_DISTINCT | K_ALL )? result_column ( ',' result_column )\*
( K\*FROM table_name)?
;

result_column
: '\*'
| table_name
;

table_name
: any_name
;

any_name
: IDENTIFIER
| keyword
| STRING_LITERAL
| '(' any_name ')'
;
