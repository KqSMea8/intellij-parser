export const testJson = {
	"name": "SELECT_STMT",
	"children": {
		"SELECT_CLAUSE": {
			"name": "SELECT_CLAUSE",
			"children": {
				"column1": {
					"image": "column1",
					"startOffset": 7,
					"endOffset": 13,
					"startLine": 1,
					"endLine": 1,
					"startColumn": 8,
					"endColumn": 14,
					"tokenTypeIdx": 2,
					"tokenType": {
						"PATTERN": {},
						"tokenTypeIdx": 2,
						"CATEGORIES": [],
						"categoryMatches": [],
						"categoryMatchesMap": {},
						"tokenName": "Identifier",
						"isParent": false
					}
				},
				"column2": {
					"image": "column2",
					"startOffset": 16,
					"endOffset": 22,
					"startLine": 1,
					"endLine": 1,
					"startColumn": 17,
					"endColumn": 23,
					"tokenTypeIdx": 2,
					"tokenType": {
						"PATTERN": {},
						"tokenTypeIdx": 2,
						"CATEGORIES": [],
						"categoryMatches": [],
						"categoryMatchesMap": {},
						"tokenName": "Identifier",
						"isParent": false
					}
				}
      }
		},
		"FROM_CLAUSE": {
			"name": "FROM_CLAUSE",
			"children": {
				"table2": {
					"image": "table2",
					"startOffset": 29,
					"endOffset": 34,
					"startLine": 1,
					"endLine": 1,
					"startColumn": 30,
					"endColumn": 35,
					"tokenTypeIdx": 2,
					"tokenType": {
						"PATTERN": {},
						"tokenTypeIdx": 2,
						"CATEGORIES": [],
						"categoryMatches": [],
						"categoryMatchesMap": {},
						"tokenName": "Identifier",
						"isParent": false
					}
				}
      }
		},
		"WHERE_CLAUSE": {
			"name": "WHERE_CLAUSE",
			"children": {
				"EXPRESSION": {
					"name": "EXPRESSION",
					"children": {
            "column2": {
              "image": "column2",
              "startOffset": 42,
              "endOffset": 48,
              "startLine": 1,
              "endLine": 1,
              "startColumn": 43,
              "endColumn": 49,
              "tokenTypeIdx": 2,
              "tokenType": {
                "PATTERN": {},
                "tokenTypeIdx": 2,
                "CATEGORIES": [],
                "categoryMatches": [],
                "categoryMatchesMap": {},
                "tokenName": "Identifier",
                "isParent": false
              }
            },
					">": {
								"image": ">",
								"startOffset": 50,
								"endOffset": 50,
								"startLine": 1,
								"endLine": 1,
								"startColumn": 51,
								"endColumn": 51,
								"tokenTypeIdx": 9,
								"tokenType": {
									"PATTERN": {},
									"tokenTypeIdx": 9,
									"CATEGORIES": [],
									"categoryMatches": [],
									"categoryMatchesMap": {},
									"tokenName": "GreaterThan",
									"isParent": false
								}
							}
						,
						"3": {
								"image": "3",
								"startOffset": 52,
								"endOffset": 52,
								"startLine": 1,
								"endLine": 1,
								"startColumn": 53,
								"endColumn": 53,
								"tokenTypeIdx": 8,
								"tokenType": {
									"PATTERN": {},
									"tokenTypeIdx": 8,
									"CATEGORIES": [],
									"categoryMatches": [],
									"categoryMatchesMap": {},
									"tokenName": "Integer",
									"isParent": false
								}
							}
          }
				}
      }
		}
  }
}


SELECT
  *, K.member_id, K.URL, fct_order_t.is_payed, T.period_day_id, COUNT(shishi, shihis)
FROM
  (
    SELECT
      item_id
    FROM
      dws_global
    UNION ALL
    SELECT
      *
    FROM
      (
        SELECT
          member_id, URL, period_day_id
        FROM
          dim_seller
      ) M
  ) K,
  fct_order_t T;
	
	SELECT * FROM fct_order Q;

	UPDATE s SET b = d;

	SELECT
  *, K.
FROM
  (
    SELECT
      *, COUNT(hsihsi, hsihi)
    FROM
      dws_global
    UNION ALL
    SELECT
      *
    FROM
      (
        SELECT
          member_id, URL, period_day_id
        FROM
          dim_seller
      ) M
  ) K,
  fct_order_t T;