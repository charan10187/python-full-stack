
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
