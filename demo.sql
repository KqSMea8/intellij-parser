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

