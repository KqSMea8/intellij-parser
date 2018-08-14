INSERT OVERWRITE s_od_account PARTITION (ds = '${lAStbizdate}')
SELECT  i.ca_id AS ca_id
        ,coalesce(u.ca_b_id,i.ca_b_id) AS ca_b_id
        ,coalesce(u.ca_c_id,i.ca_c_id) AS ca_c_id
        ,coalesce(u.ca_name,i.ca_name) AS ca_name
        ,coalesce(u.ca_tax_st,i.ca_tax_st) AS ca_tax_st
        ,coalesce(u.ca_st_id,i.ca_st_id) AS ca_st_id
FROM    (SELECT  a.id
         FROM    s_od_his_account a
         WHERE   ds = '${bizdate}'
         AND     action_type = 'I') i
LEFT OUTER JOIN
        (SELECT  a.id
         FROM    s_od_his_account a
         WHERE   ds = '${bizdate}'
         AND     action_type = 'U') u
ON      i.ca_id = u.ca_id
AND     u.rn = 5
WHERE   i.rn = 5;


INSERT OVERWRITE s_od_watchlist PARTITION(ds='${bizdate}')
SELECT 
    W_C_ID AS CUSTOMER_ID
    ,W_S_SYMB AS security_SYMBOL 
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
