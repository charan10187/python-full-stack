-- ADVANCED JOIN
-- LEFT ANTI JOIN
-- Get all Customers who haven't place any order
SELECT id,first_name,order_id FROM customers
LEFT JOIN orders
ON customers.id=orders.customer_id
WHERE orders.customer_id IS NULL;   