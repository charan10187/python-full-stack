# INFO
# DEBUG 
# ERROR
# WARNING
# CRITICAL 


import logging

# # logging.basicConfig(level=logging.DEBUG)
# logging.basicConfig(filename="info.log",level=logging.DEBUG)
# print()
# logging.info("logging code is running fine")
# print()
# logging.debug("logging code is running fine")
# print()
# logging.error("logging code is running fine")
# print()
# logging.warning("logging code is running fine")
# print()
# logging.critical("logging code is running fine")

logging.basicConfig(filename="division.log",level=logging.DEBUG)

try:
    a=10
    b=0
    result=a/b
except ZeroDivisionError as e:
    logging.error(e)
