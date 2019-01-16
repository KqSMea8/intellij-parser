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
) COMMENT 'BI系统_补录指标表_union' PARTITIONED BY (ds STRING) ROW FORMAT DELIMITED FIELDS TERMINATED BY '\u0001' STORED AS orc;

--union脚本
INSERT OVERWRITE TABLE s_bi_brc_n_plan1data_to_bi_union PARTITION (ds = ${bizdate})
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
            's_bi_brc_n_plan1data_to_bi' AS union_table
            FROM
            s_bi_brc_n_plan1data_to_bi
            WHERE
            ds = ${bizdate}
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
            '' tab,
            '' s_version,
            's_bi_brc_n_plan1data_to_bi' AS union_table
            FROM
            s_bi_dw_brc_n_plan1data_to_bi_2
            WHERE
            ds = ${bizdate}
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
            's_bi_brc_n_plan1data_to_bi' AS union_table
            FROM
            s_bi_brc_n_plan1data_to_bi_2
            WHERE
            ds = ${bizdate}
        ) a

/** 从非子查询开始 */
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


create table if not exists ads_prd_proj_area_td (
    prd_proj_id         bigint  comment'',
    prd_proj_name       string  comment'',
    property_area_td_proj   double  comment'',
    sale_bld_area_td_proj   double  comment'',
    property_area_td_proj_sale  double  comment'',
    sale_bld_area_td_proj_sale  double  comment'' ,
    stat_date   bigint comment ''
)
comment '测试使用'
partitioned by (ds string);

insert overwrite table ads_prd_proj_area_td partition (ds = '${bizdate}')
select 
     a.prd_proj_id
    ,b.prd_proj_name
    ,coalesce(cast(a.property_area_td_proj as double),0.0)
    ,coalesce(cast(a.sale_bld_area_td_proj as double),0.0)
    ,coalesce(cast(a.property_area_td_proj_sale as double),0.0)
    ,coalesce(cast(a.sale_bld_area_td_proj_sale as double),0.0)
    ,${bizdate} as stat_date
from
    (select * from brc_cdm_prod.DWS_PRD_PROJ_OD000_V1 where ds = '${bizdate}') a 
join
    (select * from LD_BRC_CORP.dim_prd_proj where ds= '${bizdate}') b 
on
    (a.prd_proj_id = b.prd_proj_id)
;


SELECT
  *
FROM
  pub_dataphin_voldemort_task
  JOIN (
    SELECT
      *
    FROM
      pub_dataphin_physical_table
      JOIN LD_retail.dws_all ON LD_retail.dws_all.com_cw = pub_dataphin_physical_table.last_access_time
  ) T1 ON pub_dataphin_voldemort_task.content_version = T1.crt_trd_cnt_1d_trd_by_cash
  JOIN api_test_odps_01 ON pub_dataphin_voldemort_task.biz_date = T1.crt_trd_cnt_30d_trd_by_cash
