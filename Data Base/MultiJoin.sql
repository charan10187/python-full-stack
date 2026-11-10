-- ! Task: Using SalesDB, Retrieve a list of all orders, along with the related customer, product and employee details. For each order, display:
--  Order ID, Customer's name, Product name, Sales, Price, Sales person's name

USE SalesDB

SELECT *
FROM SalesDB.orders

SELECT *
FROM SalesDB.customers

SELECT * FROM orders