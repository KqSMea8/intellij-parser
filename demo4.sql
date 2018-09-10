select
    '${l_stat_date}' as stat_date
    ,a.member_id
    ,b.join_activity_cnt_1y_001
from(
    select member_id from dim_cn_seller
    where ds='${ds}'
) a
left outer join(
select vaccount_id,count(*) as join_activity_cnt_1y_001 
from     --报名且通过专场活动个数
    (
    select
        distinct
        d.name
        ,b.vaccount_id
    from(
        select
            distinct id,name
            from cbuods.s_ct_topic_instance --bds_c01_ct_topic_instance
        where
            (name not like '%网销宝%' or name not like '%test%' or name not like '%测试%' or name not like '%作废%')
            and ds='${ds}')d
        join(
            select
                distinct
                topic_id
                ,vaccount_id
                ,state
                ,source_ref
                ,substr(gmt_create, 1, 10) gmt_create
                ,substr(complete_date, 1, 10) complete_date
                from cbuods.s_ct_enroll_instance --bds_c01_ct_enroll_instance
            where
                ds='${ds}'
                and substr(complete_date, 1, 10)>to_char(dateadd(to_date('${l_stat_date}', 'yyyy-mm-dd'), -365, 'dd'),'yyyy-mm-dd')
                and substr(complete_date, 1, 10)<='${l_stat_date}'
                and state='approved'
        )b
        on(b.topic_id=d.id)
    ) a13
group by vaccount_id
) b
on a.member_id=b.vaccount_id;
