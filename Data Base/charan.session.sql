 use mydatabase;
 select * from customers;
 SELECT @@port, @@hostname, @@datadir;
 SELECT @@AUTOCOMMIT;

 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'CHARAN';
 FLUSH PRIVILEGES;

 SELECT 1 AS test;