 use mydatabase;

select * from customers;
SELECT*
FROM customers
WHERE score!=0; 

-- Retrieve customers from Germany--
SELECT first_name,country FROM customers WHERE country="Germany";

select * from customers order by score asc;

select * from customers order by score desc;

select * 
from customers
order by country asc,score desc;

-- find the total score and total number of customers for each country
SELECT  country,
	SUM(score) AS total_score,
	COUNT(id) AS NOC
FROM customers
group by country;
 
-- find the average score for each country considering only customer
-- with a score not equal to 0 and return only those countries with an average score greater than 430 
select country,
		AVG(score) AS avg_score
        FROM CUSTOMERS
        WHERE SCORE > 0
        group by country
        HAVING avg_score > 430;
        
--  Retrieve Only 3 Customers
SELECT *
FROM customers
LIMIT 3;

-- Retrieve the Top 3 Customers with the Highest Scores 
SELECT * FROM customers
ORDER BY score DESC
LIMIT 3;

-- GET the TWo Most Recent Orders
SELECT* FROM orders
ORDER BY order_date desc
LIMIT 2;


INSERT INTO customers (id, first_name, country, score)
VALUES(6,'anna','USA',null),
(7,'Sam',NULL,100);
INSERT INTO customers (id, first_name)
VALUES(9,'Sam');

--  Insert data from 'customers' into 'persons'
INSERT INTO persons
SELECT 
id,first_name,null,'email','unknown'
FROM customers;

select * from persons;
ALTER TABLE PERSONs
ADD column job varchar(10);


UPDATE customers
SET score=650
WHERE id=6;
SELECT * FROM customers;
UPDATE customers
SET score=850,country='UK'
WHERE id=9;

SET SQL_SAFE_UPDATES = 1;

UPDATE customers
SET country='DN'
WHERE country='usA'
limit 20;

DELETE FROM CUSTOMERS
WHERE ID>5;

SELECT * FROM CUSTOMERS
WHERE ID>5;
-- ALL CUSTOMERS FROM USA 
SELECT * FROM customers
WHERE country='DN';

update customers
set country='USA'
WHERE country='DN'
LIMIT 4;

-- ALL CUSTOMERS WHO ARE NOT FROM USA
SELECT * FROM customers
WHERE country!='USA';

-- ALL CUSTOMERS WITH A SCORE GRATER THAN 500
SELECT* FROM customers
WHERE score > 500;

-- ALL CUSTOMERS WITH A SCORE GRATER THAN or EQUAL 500
SELECT* FROM customers
WHERE score >= 500;

-- ALL CUSTOMERS WITH A SCORE LESS THAN 500
SELECT* FROM customers
WHERE score < 500;

-- ALL CUSTOMERS WITH A SCORE LESS THAN or EQUAL 500
SELECT* FROM customers
WHERE score <= 500;

-- ALL CUSTOMERS WITH A SCORE GRATER THAN AND EQUAL 500 AND FROM USA
SELECT * FROM customers
WHERE score >= 500 AND country='usa';

-- ALL CUSTOMERS WITH A SCORE GRATER THAN 500 AND FROM USA
SELECT * FROM customers
WHERE score >= 500 OR country='usa';

-- ALL CUSTOMERS WITH A SCORE BETWEEN 100 - 500 
SELECT * FROM customers
WHERE score NOT BETWEEN 100 AND 500; 
-- OR
SELECT * FROM customers
WHERE score>=100 AND SCORE<=500;

-- FIND ALL CUSTOMERS WHOSE FIRST_NAME STARTS WITH 'M'
SELECT *FROM customers 
WHERE first_name LIKE 'M%';

-- FIND ALL CUSTOMERS WHOSE FIRST_NAME ENDS WITH 'N'
SELECT *FROM customers 
WHERE first_name LIKE '%N';

-- FIND ALL CUSTOMERS WHOSE FIRST_NAME CONTAINS 'R'
SELECT *FROM customers 
WHERE first_name LIKE '%R%';

-- FIND ALL CUSTOMERS WHOSE FIRST_NAME HAS 'R' IN THE 3RD POSITION
SELECT *FROM customers 
WHERE first_name LIKE '__R%';

-- =============================== JOINS ==================================

-- ALL DATA FROM CUSTOMERS AND ORDERS IN TWO DIFFERENT RESULTS
SELECT*FROM customers;
SELECT*FROM orders;

--   ALL CUSTOMERS ALONG WITH THEIR ORDERS, BUT ONLY FOR CUSTOMERS WHO PLACED AN ORDER
SELECT id,first_name,order_id,sales FROM customers
INNER JOIN orders
ON customer_id=id;

--  Get all customers along with their orders,including those without orders
SELECT id,first_name,order_id,sales
FROM customers
LEFT JOIN orders
ON customers.id=orders.customer_id;

SELECT @@port, @@hostname, @@datadir;



