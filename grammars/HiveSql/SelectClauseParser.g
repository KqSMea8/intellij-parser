selectClause:
	KWSELECT hintClause? (
		((KWALL | dist = KWDISTINCT)? selectList)
		| (transform = KWTRANSFORM selectTrfmClause)
	)
	| trfmClause;

selectList: selectItem ( COMMA selectItem)*;

selectTrfmClause:
	LPAREN selectExpressionList RPAREN inSerde = rowFormat inRec = recordWriter KWUSING
		StringLiteral (
		KWAS (
			(LPAREN (aliasList | columnNameTypeList) RPAREN)
			| (aliasList | columnNameTypeList)
		)
	)? outSerde = rowFormat outRec = recordReader;

hintClause: DIVIDE STAR PLUS hintList STAR DIVIDE;

hintList: hintItem (COMMA hintItem)*;

hintItem: hintName (LPAREN hintArgs RPAREN)?;

hintName: KWMAPJOIN | KWSTREAMTABLE | KWHOLD_DDLTIME;

hintArgs: hintArgName (COMMA hintArgName)*;

hintArgName: identifier;

selectItem:
	(
		selectExpression (
			(KWAS? identifier)
			| (KWAS LPAREN identifier (COMMA identifier)* RPAREN)
		)?
	);

trfmClause:
	(KWMAP selectExpressionList | KWREDUCE selectExpressionList) inSerde = rowFormat inRec =
		recordWriter KWUSING StringLiteral (
		KWAS (
			(LPAREN (aliasList | columnNameTypeList) RPAREN)
			| (aliasList | columnNameTypeList)
		)
	)? outSerde = rowFormat outRec = recordReader;

selectExpression: expression | tableAllColumns;

selectExpressionList:
	selectExpression (COMMA selectExpression)*;

//---------------------- Rules for windowing clauses -------------------------------
window_clause: KWWINDOW window_defn (COMMA window_defn)*;

window_defn: Identifier KWAS window_specification;

window_specification:
	(
		Identifier
		| (
			LPAREN Identifier? partitioningSpec? window_frame? RPAREN
		)
	);

window_frame: window_range_expression | window_value_expression;

window_range_expression:
	KWROWS sb = window_frame_start_boundary
	| KWROWS KWBETWEEN s = window_frame_boundary KWAND end = window_frame_boundary;

window_value_expression:
	KWRANGE sb = window_frame_start_boundary
	| KWRANGE KWBETWEEN s = window_frame_boundary KWAND end = window_frame_boundary;

window_frame_start_boundary:
	KWUNBOUNDED KWPRECEDING
	| KWCURRENT KWROW
	| Number KWPRECEDING;

window_frame_boundary:
	KWUNBOUNDED (r = KWPRECEDING | r = KWFOLLOWING)
	| KWCURRENT KWROW
	| Number (d = KWPRECEDING | d = KWFOLLOWING);

