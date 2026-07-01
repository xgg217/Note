-- 1.创建一张 team 表,记录足球队
-- 查询对阵表
SELECT t1.name AS '主场', t2.name AS '客场'
FROM `team` AS `t1`, `team` AS `t2`
WHERE t1.id != t2.id;

SELECT t1.name AS '主场'
FROM `team` AS `t1`, `team` AS `t2`;
WHERE t1.id != t2.id;

-- 显示出所有员工的姓名、性别（使用男或女显示）、入职时间、薪水、所属部门（显示部门名称）、所属公司（显示公司名称）
SELECT `employee`.id,
`employee`.name AS '姓名',
CASE
	WHEN `employee`.ismale = 1 THEN
		'男'
	ELSE
		'女'
END `性别`,
`employee`.joinDate AS '入职时间',
`employee`.salary AS '薪水',
`department`.`name` as '所属部门',
`company`.`name` AS '公司名称'
FROM `employee`
INNER JOIN `department` ON `employee`.deptId = `department`.id
INNER JOIN `company` ON `department`.companyId = `company`.id
ORDER BY `employee`.id;


-- 查询腾讯和蚂蚁金服的所有员工姓名、性别、入职时间、公司名字
SELECT `employee`.id,
`employee`.name AS '姓名',
CASE
	WHEN `employee`.ismale = 1 THEN
		'男'
	ELSE
		'女'
END `性别`,
`employee`.joinDate AS '入职时间',
`company`.`name` AS '公司名称'
FROM `employee`
INNER JOIN `department` ON `employee`.deptId = `department`.id
INNER JOIN `company` ON `department`.companyId = `company`.id
WHERE `company`.`name` IN ('腾讯科技', '蚂蚁金服')
ORDER BY `employee`.id; 


-- 查询渡一教育部的所有员工名字、性别、入职时间、部门名、公司名
SELECT `employee`.id,
`employee`.name AS '姓名',
CASE
	WHEN `employee`.ismale = 1 THEN
		'男'
	ELSE
		'女'
END `性别`,
`employee`.joinDate AS '入职时间',
`department`.`name` as '所属部门',
`company`.`name` AS '公司名称'
FROM `employee`
INNER JOIN `department` ON `employee`.deptId = `department`.id
INNER JOIN `company` ON `department`.companyId = `company`.id
WHERE (`company`.`name` LIKE '%渡一%') AND (`department`.`name` = '教学部')
ORDER BY `employee`.id; 

-- 列出所有公司员工居住地的地址（去掉重复）
SELECT DISTINCT `location` FROM `employee`
