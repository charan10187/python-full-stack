import mysql.connector

conn=mysql.connector.connect(
    host="localhost",
    user="root",
    password="charan",
    database="mydatabase"
)

print("connected successfully")