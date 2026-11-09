-- ADVANCED JOIN
-- ` LEFT ANTI JOIN`
-- Get all Customers who haven't place any order
SELECT id,first_name,order_id FROM customers
LEFT JOIN orders
ON customers.id=orders.customer_id
WHERE orders.customer_id IS NULL;   

--  Get all orders without matching customers
SELECT * FROM customers
RIGHT JOIN orders
ON customers.id=orders.customer_id
WHERE customers.id IS NULL
    -- OR


