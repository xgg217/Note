-- asc 升序
SELECT * from `employee`
WHERE `name` LIKE '张%' AND (ismale = 0 AND salary >= 12000
or
birthday >= '1996-1-1')
ORDER BY `salary` ASC;

SELECT * from `employee`
WHERE `name` LIKE '张%' AND (ismale = 0 AND salary >= 12000
or
birthday >= '1996-1-1')
ORDER BY `salary`;

-- desc 降序
SELECT * from `employee`
WHERE `name` LIKE '张%' AND (ismale = 0 AND salary >= 12000
or
birthday >= '1996-1-1')
ORDER BY `salary` DESC;

-- 多条件并列
SELECT *,
CASE
	WHEN `ismale` = 1 THEN
		'男'
	ELSE
		'女'
END sex
FROM employee
ORDER BY `sex` ASC, `salary` DESC;
