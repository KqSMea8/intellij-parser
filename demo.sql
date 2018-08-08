--name:SQL
--author:Xiwang
--create time:2018-07-31 13:59
--subject:BI补录系统表union结果中间表
create table if not exists s_bi_brc_n_plan1data_to_bi_union (
  accountcode string comment '',
  period string comment '',
  yearcode string comment '',
  scenario string comment '',
  version string comment '',
  entitycode string comment '',
  layout string comment '',
  detail string comment '',
  caliber string comment '',
  tversion string comment '',
  others1 string comment '',
  others2 string comment '',
  data string comment '',
  create_date string comment '',
  tab string comment '',
  s_version string comment '',
  union_table string comment '来源表名'
) comment 'BI系统_补录指标表_union' partitioned by (ds string) ROW FORMAT DELIMITED FIELDS TERMINATED BY '\u0001' STORED AS orc;

--union脚本
insert overwrite table s_bi_brc_n_plan1data_to_bi_union partition (ds = ${bizdate})
select
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
        from
        (
            select
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
            's_bi_brc_n_plan1data_to_bi' as union_table
            from
            s_bi_brc_n_plan1data_to_bi
            where
            ds = ${bizdate}
            union all
            select
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
            's_bi_brc_n_plan1data_to_bi' as union_table
            from
            s_bi_dw_brc_n_plan1data_to_bi_2
            where
            ds = ${bizdate}
            union all
            select
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
            's_bi_brc_n_plan1data_to_bi' as union_table
            from
            s_bi_brc_n_plan1data_to_bi_2
            where
            ds = ${bizdate}
        ) a
