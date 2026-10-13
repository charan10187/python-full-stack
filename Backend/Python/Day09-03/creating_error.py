try:
    age=int(input("age="))

    if age>18:
        print("welcome to club")
    else:
        raise ValueError("Kick out")
except ValueError as e:
    print(e,"cos",age)
finally:
    print('byee')