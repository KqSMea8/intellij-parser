// sqlite 语法
// https://github.com/antlr/grammars-v4/blob/master/sqlite/SQLite.g4

select
: K_SELECT ( K_DISTINCT | K_ALL )? result_columns
( K\*FROM name)?
;

result_columns:
result_column ( ',' result_column )

result_column
: '\*'
| name
;

name
: IDENTIFIER
| '(' name ')'
;
