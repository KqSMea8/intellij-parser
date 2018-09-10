Insert OVERWRITE TABLE s_od_account PARTITION (ds = '${lAStbizdate}')
SELECT  i.ca_id AS ca_id
        ,coalesce(u.ca_b_id,i.ca_b_id) AS ca_b_id
        ,coalesce(u.ca_c_id,i.ca_c_id) AS ca_c_id
        ,coalesce(u.ca_name,i.ca_name) AS ca_name
        ,coalesce(u.ca_tax_st,i.ca_tax_st) AS ca_tax_st
        ,coalesce(u.ca_st_id,i.ca_st_id) AS ca_st_id
FROM    (SELECT  a.*
         FROM    s_od_his_account a
         WHERE   ds = '${bizdate}'
         AND     action_type = 'I') i
LEFT OUTER JOIN
        (SELECT  a.*
         FROM    s_od_his_account a
         WHERE   ds = '${bizdate}'
         AND     action_type = 'U') u
ON      i.ca_id = u.ca_id
AND     u.rn = 5
WHERE   i.rn = 5;


INSERT OVERWRITE TABLE s_od_watchlist PARTITION(ds='${bizdate}')
SELECT 
    W_C_ID AS CUSTOMER_ID
    ,W_S_SYMB AS security_SYMBOL 
    ,SUBSTR(w_actv_dts, 1, 10) AS PLACED_DATE_ID
    ,SUBSTR(w_cncl_dts, 1, 10) AS REMOV_DATE_ID  
    ,CASE 
	WHEN w_actv_dts IS NOT NULL
		AND w_cncl_dts IS NULL
	THEN 'ACTV'
	WHEN w_actv_dts IS NOT NULL
		AND w_cncl_dts IS NOT NULL
		AND w_actv_dts >= w_cncl_dts
	THEN 'ACTV'
	WHEN w_actv_dts IS NOT NULL
		AND w_cncl_dts IS NOT NULL
		AND w_actv_dts < w_cncl_dts
	THEN 'CNCL'
END AS WATCH_STATUS  
FROM (
	SELECT W_C_ID, W_S_SYMB
		, CASE 
			WHEN W_ACTION = 'ACTV' THEN w_dts
			ELSE NULL
		END AS w_actv_dts
		, CASE 
			WHEN W_ACTION = 'CNCL' THEN w_dts
			ELSE NULL
		END AS w_cncl_dts
	FROM demo.s_od_watchhistory
	WHERE ds = '${bizdate}'
	GROUP BY W_C_ID, 
		W_S_SYMB,
		W_ACTION,
		w_dts
) t0;


CREATE TABLE IF NOT EXISTS s_bi_brc_n_plan1data_to_bi_union (
  accountcode STRING COMMENT '',
  period STRING COMMENT '',
  yearcode STRING COMMENT '',
  scenario STRING COMMENT '',
  version STRING COMMENT '',
  entitycode STRING COMMENT '',
  layout STRING COMMENT '',
  detail STRING COMMENT '',
  caliber STRING COMMENT '',
  tversion STRING COMMENT '',
  others1 STRING COMMENT '',
  others2 STRING COMMENT '',
  data STRING COMMENT '',
  create_date STRING COMMENT '',
  tab STRING COMMENT '',
  s_version STRING COMMENT '',
  union_table STRING COMMENT '来源表名'
) COMMENT 'BI系统_补录指标表_union';


SELECT *, T2.period_day_id, T1.period_day_id, T1.K, T1.PAY_AMT
FROM
  (SELECT *, COUNT(PATY_MONEY) AS K FROM fct_order_t) T1
  JOIN
(SELECT M.period_day_id
FROM
  (
    SELECT
      member_id,
      URL,
      period_day_id
    FROM
      dim_seller
  ) M ) T2;

INSERT OVERWRITE TABLE s_bi_brc_n_plan1data_to_bi_union PARTITION (ds = '${bizdate}')
SELECT
        accountcode,
        period,
        yearcode,
        scenario,
        version,
        entitycode,
        layout,
        detail,
        caliber,
        tversion,
        others1,
        others2,
        data,
        create_date,
        tab,
        s_version,
        union_table
        FROM
        (
            SELECT
            accountcode,
            period,
            yearcode,
            scenario,
            version,
            entitycode,
            layout,
            detail,
            caliber,
            tversion,
            others1,
            others2,
            data,
            create_date,
            tab,
            s_version,
            s_bi_brc_n_plan1data_to_bi AS union_table
            FROM
            s_bi_brc_n_plan1data_to_bi
            WHERE
            ds = '${bizdate}'
            UNION ALL
            SELECT
            accountcode,
            period,
            yearcode,
            scenario,
            version,
            entitycode,
            layout,
            detail,
            caliber,
            tversion,
            others1,
            others2,
            data,
            create_date,
            s_bi_brc_n_plan1data_to_bi AS union_table
            FROM
            s_bi_dw_brc_n_plan1data_to_bi_2
            WHERE
            ds = '${bizdate}'
            UNION ALL
            SELECT
            accountcode,
            period,
            yearcode,
            scenario,
            version,
            entitycode,
            layout,
            detail,
            caliber,
            tversion,
            others1,
            others2,
            data,
            create_date,
            tab,
            s_version,
            s_bi_brc_n_plan1data_to_bi AS union_table
            FROM
            s_bi_brc_n_plan1data_to_bi_2
            WHERE
            ds = '${bizdate}'
        ) a;
