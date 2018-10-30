selectClause:
	KW_SELECT hintClause? (
		((KW_ALL | dist = KW_DISTINCT)? selectList)
		| (transform = KW_TRANSFORM selectTrfmClause)
	) -> {$transform == null && $dist == null}? (TOK_SELECT hintClause? selectList) -> {$transform == null && $dist != null
		}? (TOK_SELECTDI hintClause? selectList) -> (TOK_SELECT hintClause? (TOK_SELEXPR
		selectTrfmClause) )
	| trfmClause -> (TOK_SELECT (TOK_SELEXPR trfmClause));

selectList: selectItem ( COMMA selectItem)* -> selectItem+;

selectTrfmClause:
	LPAREN selectExpressionList RPAREN inSerde = rowFormat inRec = recordWriter KW_USING
		StringLiteral (
		KW_AS (
			(LPAREN (aliasList | columnNameTypeList) RPAREN)
			| (aliasList | columnNameTypeList)
		)
	)? outSerde = rowFormat outRec = recordReader -> (TOK_TRANSFORM selectExpressionList $inSerde $
		inRec StringLiteral $outSerde $outRec aliasList? columnNameTypeList? );

hintClause:
	DIVIDE STAR PLUS hintList STAR DIVIDE -> (TOK_HINTLIST hintList);

hintList: hintItem (COMMA hintItem)* -> hintItem+;

hintItem:
	hintName (LPAREN hintArgs RPAREN)? -> (TOK_HINT hintName hintArgs? );

hintName:
	KW_MAPJOIN -> TOK_MAPJOIN
	| KW_STREAMTABLE -> TOK_STREAMTABLE
	| KW_HOLD_DDLTIME -> TOK_HOLD_DDLTIME;

hintArgs:
	hintArgName (COMMA hintArgName)* -> (TOK_HINTARGLIST hintArgName+ );

hintArgName: identifier;

selectItem:
	(
		selectExpression (
			(KW_AS? identifier)
			| (
				KW_AS LPAREN identifier (COMMA identifier)* RPAREN
			)
		)?
	) -> (TOK_SELEXPR selectExpression identifier* );

trfmClause:
	(
		KW_MAP selectExpressionList
		| KW_REDUCE selectExpressionList
	) inSerde = rowFormat inRec = recordWriter KW_USING StringLiteral (
		KW_AS (
			(LPAREN (aliasList | columnNameTypeList) RPAREN)
			| (aliasList | columnNameTypeList)
		)
	)? outSerde = rowFormat outRec = recordReader -> (TOK_TRANSFORM selectExpressionList $inSerde $
		inRec StringLiteral $outSerde $outRec aliasList? columnNameTypeList? );

selectExpression: expression | tableAllColumns;

selectExpressionList:
	selectExpression (COMMA selectExpression)* -> (TOK_EXPLIST selectExpression+ );

//---------------------- Rules for windowing clauses -------------------------------
window_clause:
	KW_WINDOW window_defn (COMMA window_defn)* -> (KW_WINDOW window_defn+ );

window_defn:
	Identifier KW_AS window_specification -> (TOK_WINDOWDEF Identifier window_specification);

window_specification:
	(
		Identifier
		| (
			LPAREN Identifier? partitioningSpec? window_frame? RPAREN
		)
	) -> (TOK_WINDOWSPEC Identifier? partitioningSpec? window_frame? );

window_frame: window_range_expression | window_value_expression;

window_range_expression:
	KW_ROWS sb = window_frame_start_boundary -> (TOK_WINDOWRANGE $sb)
	| KW_ROWS KW_BETWEEN s = window_frame_boundary KW_AND end = window_frame_boundary -> (
		TOK_WINDOWRANGE $s $end);

window_value_expression:
	KW_RANGE sb = window_frame_start_boundary -> (TOK_WINDOWVALUES $sb)
	| KW_RANGE KW_BETWEEN s = window_frame_boundary KW_AND end = window_frame_boundary -> (
		TOK_WINDOWVALUES $s $end);

window_frame_start_boundary:
	KW_UNBOUNDED KW_PRECEDING -> (KW_PRECEDING KW_UNBOUNDED)
	| KW_CURRENT KW_ROW -> (KW_CURRENT)
	| Number KW_PRECEDING -> (KW_PRECEDING Number);

window_frame_boundary:
	KW_UNBOUNDED (r = KW_PRECEDING | r = KW_FOLLOWING) -> ($r KW_UNBOUNDED)
	| KW_CURRENT KW_ROW -> (KW_CURRENT)
	| Number (d = KW_PRECEDING
	| d = KW_FOLLOWING ) -> ($d Number);
