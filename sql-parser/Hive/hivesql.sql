SELECT * FROM user WHERE id = 1 and ui = 3 group by id order by id distribute by id sort by id;
ALTER TABLE test_change CHANGE b b1 INT FIRST;