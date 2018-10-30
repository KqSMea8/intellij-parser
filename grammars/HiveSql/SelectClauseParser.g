selectClause:
	KW_SELECT hintClause? (
		((KW_ALL | dist = KW_DISTINCT)? selectList)
		| (transform = KW_TRANSFORM selectTrfmClause)
	)
	| trfmClause;

selectList: selectItem ( COMMA selectItem)*;

selectTrfmClause:
	LPAREN selectExpressionList RPAREN inSerde = rowFormat inRec = recordWriter KW_USING
		StringLiteral (
		KW_AS (
			(LPAREN (aliasList | columnNameTypeList) RPAREN)
			| (aliasList | columnNameTypeList)
		)
	)? outSerde = rowFormat outRec = recordReader;

hintClause: DIVIDE STAR PLUS hintList STAR DIVIDE;

hintList: hintItem (COMMA hintItem)*;

hintItem: hintName (LPAREN hintArgs RPAREN)?;

hintName: KW_MAPJOIN | KW_STREAMTABLE | KW_HOLD_DDLTIME;

hintArgs: hintArgName (COMMA hintArgName)*;

hintArgName: identifier;

selectItem:
	(
		selectExpression (
			(KW_AS? identifier)
			| (
				KW_AS LPAREN identifier (COMMA identifier)* RPAREN
			)
		)?
	);

trfmClause:
	(
		KW_MAP selectExpressionList
		| KW_REDUCE selectExpressionList
	) inSerde = rowFormat inRec = recordWriter KW_USING StringLiteral (
		KW_AS (
			(LPAREN (aliasList | columnNameTypeList) RPAREN)
			| (aliasList | columnNameTypeList)
		)
	)? outSerde = rowFormat outRec = recordReader;

selectExpression: expression | tableAllColumns;

selectExpressionList:
	selectExpression (COMMA selectExpression)*;

//---------------------- Rules for windowing clauses -------------------------------
window_clause: KW_WINDOW window_defn (COMMA window_defn)*;

window_defn: Identifier KW_AS window_specification;

window_specification:
	(
		Identifier
		| (
			LPAREN Identifier? partitioningSpec? window_frame? RPAREN
		)
	);

window_frame: window_range_expression | window_value_expression;

window_range_expression:
	KW_ROWS sb = window_frame_start_boundary
	| KW_ROWS KW_BETWEEN s = window_frame_boundary KW_AND end = window_frame_boundary;

window_value_expression:
	KW_RANGE sb = window_frame_start_boundary
	| KW_RANGE KW_BETWEEN s = window_frame_boundary KW_AND end = window_frame_boundary;

window_frame_start_boundary:
	KW_UNBOUNDED KW_PRECEDING
	| KW_CURRENT KW_ROW
	| Number KW_PRECEDING;

window_frame_boundary:
	KW_UNBOUNDED (r = KW_PRECEDING | r = KW_FOLLOWING)
	| KW_CURRENT KW_ROW
	| Number (d = KW_PRECEDING | d = KW_FOLLOWING);

