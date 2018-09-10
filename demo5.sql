select
  distinct t1.stat_date
  ,t8.user_id
  ,t8.member_id
  ,t1.member_name
  ,t3.ip
  ,t1.question
  ,t1.answer_id
  ,t1.chat_uuid
  ,t4.client_url
  ,t1.scene_code
  ,t4.name
  ,t1.answer_type
  ,t1.standard_knowledge_title
  ,t1.knowledge_title
  ,t2.knowledge_id
  ,t2.score
  ,t1.segment_result
  ,t1.response_time
  ,t1.feedback_type
  ,t1.feedback
  ,t5.name
  ,t7.cat_path
  ,t1.session_uuid
  ,t6.knowledge_name
  ,t1.robot_code
  ,t9.level
  ,split(t4.name, '-')[0] as scene_title
  ,split(t4.name, '-')[1] as scene_category1
  ,split(t4.name, '-')[2] as scene_category2
  ,split(t4.name, '-')[3] as scene_category3  
  ,split(t7.cat_path, '>>')[2] as konwledge_category1
  ,split(t7.cat_path, '>>')[3] as konwledge_category2
  ,split(t7.cat_path, '>>')[4] as konwledge_category3  
from
  (select
    gmt_create as stat_date
    ,member_id as user_id
    ,creator as member_name
    ,question        
    ,session_uuid      
    ,answer_id        
    ,chat_uuid        
    ,scene_code
    ,robot_code
    ,answer_type
    ,knowledge_title
    ,standard_knowledge_title
    ,segment_result      
    ,response_time
    ,feedback_type
    ,feedback
    ,level
  from crm_ods.s_robot_chat_log_delta
  where ds = '${bizdate}'
  and robot_code in ('ALIR00000161', 'ALIR00001241', 'ALIR00003305')
  ) t1
left outer join
  (select
    chat_uuid
    ,knowledge_id      --知识点id
    ,knowledge_title    --知识点标题
    ,score
    ,level
  from crm_ods.s_robot_chat_log_detail_delta
  where ds = '${bizdate}'
  ) t2
on (t1.chat_uuid = t2.chat_uuid and t1.answer_id = t2.knowledge_id)
left outer join
  (select
    session_uuid
    ,ip        --IP地址
  from crm_ods.s_robot_session
  where ds = '${bizdate}'
  ) t3
on t1.session_uuid = t3.session_uuid
left outer join
  (select
    code      -- 场景编码
    ,name      -- 场景名称
    ,client_url    -- 埋点url
  from crm_ods.s_robot_scene    --机器人场景表
  where ds = '${bizdate}'
  ) t4
on t1.scene_code = t4.code
left outer join
  (select
    code      -- 机器人的实例编号
    ,name      -- 机器人名称
  from crm_ods.s_robot    --机器人表
  where ds = '${bizdate}'
  and is_deleted = 'n'
  ) t5
on t1.robot_code = t5.code
left outer join
  (select
    knowledge_cate_id
    ,knowledge_id
    ,knowledge_name
  from crm_cdm.dim_tb_crm_online_knldgbase
  where ds = '${bizdate}'
  ) t6
on t2.knowledge_id = t6.knowledge_id
left outer join
  (select
    id
    ,cat_path    -- 类目路径
  from crm_ods.s_crm_knowledge_category
  where ds = '${bizdate}'
  ) t7
on t6.knowledge_cate_id = t7.id
left outer join
  (select
    user_id
    ,member_id    
    ,login_id
  from cbucdm.dim_cn_mbr
  where ds = '${bizdate}'
  ) t8
on t1.member_name = t8.login_id
left outer join
  (select
    t.chat_uuid  
    ,t.answer_id
    ,t.level
  from
    (select
      a.chat_uuid  
      ,a.answer_id
      ,b.level
      ,row_number() over(partition by a.chat_uuid order by b.score desc) as rn
    from
      (select      
        chat_uuid  
        ,answer_id
      from crm_ods.s_robot_chat_log_delta
      where ds = '${bizdate}'
      and robot_code in ('ALIR00000161', 'ALIR00001241', 'ALIR00003305')
      ) a
    left outer join
      (select
        chat_uuid
        ,score
        ,level
      from crm_ods.s_robot_chat_log_detail_delta
      where ds = '${bizdate}'
      and level is not null
      ) b
    on a.chat_uuid = b.chat_uuid
    ) t
  where t.rn = 1
  ) t9
on (t1.chat_uuid = t9.chat_uuid and t1.answer_id = t9.answer_id);
