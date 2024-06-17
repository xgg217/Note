-- 查询 user 表 得到账户为 admin,密码123456 的用户
-- 登陆操作
SELECT * FROM `user`
WHERE (`loginId` = 'admin') AND (`loginPwd` = '123123');


-- 查询 employee 表,按照员工的入职时间降序排序,并且分页查询
-- 查询 第2页，每页10条
SELECT * FROM `employee`
ORDER BY `joinDate`
DESC LIMIT 10, 10;

-- 查询工资最高的女员工
SELECT * FROM `employee`
WHERE `ismale` = 0
ORDER BY `salary` DESC
LIMIT 0, 1;
