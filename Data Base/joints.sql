-- ============================== JOINS ============================
-- ALL DATA FROM CUSTOMERS AND ORDERS IN TWO DIFFERENT RESULTS
SELECT*FROM customers;
SELECT*FROM orders;

-- No Join
--   ALL CUSTOMERS ALONG WITH THEIR ORDERS, BUT ONLY FOR CUSTOMERS WHO PLACED AN ORDER
SELECT id,first_name,order_id,sales FROM customers
INNER JOIN orders
ON customer_id=id;


-- Left Join
--  Get all customers along with their orders,including those without orders
SELECT id,first_name,order_id,sales
FROM customers
LEFT JOIN orders
ON customers.id=orders.customer_id; 

-- Right Join
--  Get all customers along with their orders,including orders without matching customers
SELECT id,first_name,order_id,sales
FROM customers
RIGHT JOIN orders
ON customers.id=orders.customer_id;

-- OR we can also use the Left Join which gives same result
SELECT id,first_name,order_id,sales
FROM orders 
LEFT JOIN customers
ON customers.id=orders.customer_id;

-- Get all customers and all orders, even if there's no match
SELECT c.id,c.customer_id,o.order_id,o.sales
FROM customers as c
FULL JOIN orders as o
ON c.id=o.customer_id;

SELECT id,first_name,order_id,sales
FROM customers
RIGHT JOIN orders
ON customers.id=orders.customer_id
UNION
SELECT id,first_name,order_id,sales
FROM orders 
LEFT JOIN customers
ON customers.id=orders.customer_id;
