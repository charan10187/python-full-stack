-- ============================== JOINS ============================
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

