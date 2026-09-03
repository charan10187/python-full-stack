try:
    a = 10
    b = 0
    print(a / b)
except ZeroDivisionError:
    print("Cannot divide by zero.")
finally:
    print("This block always runs.")

try:
    number=int(input("enter numbere:"))
    result=10/number
    print(result)
except ValueError:
    print("please enter a valid number")
except ZeroDivisionError:
    print("number cannot be zero")
except:
    print("somthing is wrong")
