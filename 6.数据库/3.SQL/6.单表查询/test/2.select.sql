-- 单列查询
SELECT `id` FROM `user`;

-- 多列查询
SELECT `id`, `loginId` FROM `user`;

-- 别名 方法1
SELECT ismale as '性别' FROM `employee`;
SELECT id, ismale as '性别' FROM `employee`;

-- 别名 方法2
SELECT `ismale` '性别' FROM `employee`;

-- * 所有列
SELECT * FROM `user`;

-- case
SELECT id, `name`,
`ismale`
salary
FROM employee;

-- case 写法1
SELECT id, `name`,
  CASE `ismale`
    WHEN 1 THEN
      '男'
    ELSE
      '女'
  END sex,
  salary
  FROM employee;

-- 写法 2
SELECT id, `name`,
  CASE 
    WHEN `ismale` = 1 THEN
      '男'
    ELSE
      '女'
  END sex,
  salary
  FROM employee;
	
	SELECT id, `name`,
  CASE 
    WHEN `ismale` = 1 THEN
      '男'
    ELSE
      '女'
  END sex,
  CASE 
    WHEN `salary` >= 10000 THEN
      '高工资'
    WHEN `salary` >= 5000 THEN
      '中等工资'
    ELSE
      '低工资'
  END `lev`
  FROM employee;
	
	-- distinct 去重
SELECT DISTINCT `location` FROM `employee` ORDER BY `location`;
	