insert overwrite table s_od_watchlist partition(ds='${bizdate}')
select 
    W_C_ID as CUSTOMER_ID
    ,W_S_SYMB as SECURITY_SYMBOL 
,SUBSTR(w_actv_dts, 1, 10) as PLACED_DATE_ID 
,SUBSTR(w_cncl_dts, 1, 10) as REMOVED_DATE_ID  
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
END as WATCH_STATUS  
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
) t0