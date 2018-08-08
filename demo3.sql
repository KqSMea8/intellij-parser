insert overwrite table s_od_account partition (ds = '${lastbizdate}')
select  i.ca_id as ca_id
        ,coalesce(u.ca_b_id,i.ca_b_id) as ca_b_id
        ,coalesce(u.ca_c_id,i.ca_c_id) as ca_c_id
        ,coalesce(u.ca_name,i.ca_name) as ca_name
        ,coalesce(u.ca_tax_st,i.ca_tax_st) as ca_tax_st
        ,coalesce(u.ca_st_id,i.ca_st_id) as ca_st_id
from    (select  a.*
                 ,row_number() over(partition by ca_id order by actionts desc) as rn
         from    s_od_his_account a
         where   ds = '${bizdate}'
         and     action_type = 'I') i
left outer join
        (select  a.*
                 ,row_number() over(partition by ca_id order by actionts desc) as rn
         from    s_od_his_account a
         where   ds = '${bizdate}'
         and     action_type = 'U') u
on      i.ca_id = u.ca_id
and     u.rn = 1
where   i.rn = 1
;
