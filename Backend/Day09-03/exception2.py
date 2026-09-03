try:
    a = 10
    b = 2
    print(a / b)
except ZeroDivisionError:
    print("Cannot divide by zero.")
else:
    print("No error byeeee")
finally:
    print("This block always runs.")