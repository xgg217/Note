SELECT * from employee WHERE ismale = 1;

-- =
SELECT * from employee WHERE ismale = 1;

-- in
SELECT * FROM `department` WHERE `companyId` in (1,2);

-- IS
SELECT * from employee WHERE `location` IS NULL;

-- is not
SELECT * from employee WHERE `location` IS NOT NULL;

-- >
SELECT * from `employee` WHERE salary >= 10000;

-- between
SELECT * from `employee` WHERE salary BETWEEN 10000 and 12000;

-- like
SELECT * from `employee` WHERE `name` LIKE '周%';
SELECT * from `employee` WHERE `name` LIKE '周__';

-- and
SELECT * from `employee`
WHERE `name` LIKE '张%' AND ismale = 0 AND salary >= 12000;

-- or
SELECT * from `employee`
WHERE (`name` LIKE '张%' AND ismale = 0 AND salary >= 12000)
or
(birthday >= '1996-1-1');

SELECT * from `employee`
WHERE `name` LIKE '张%' AND (ismale = 0 AND salary >= 12000
or
birthday >= '1996-1-1');

