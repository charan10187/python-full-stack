-- Topic keys

-- PRIMARY KEY
-- The main unique identifier for each record in a table ,
-- used to enforce data integrity and ensure each record is uniquely identified

-- SAMPLE DATA
CREATE DATABASE KeysDB;

USE KeysDB;

-- Create a table 
CREATE TABLE student(ID int PRIMARY KEY,Name varchar(255),Cource varchar(255))

DESCRIBE student;

insert INTO student VALUES (01,"UDAY","AIML");
insert INTO STUDENT VALUES (02,"RAJ","CSE");
SELECT * FROM STUDENT;

UPDATE STUDENT SET NAME="CHARAN" WHERE ID=1;