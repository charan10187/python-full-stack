# def fun(a,b):
#     print(a+b)
# fun(10,10)

# calculater.py
# def calculater()

def result(marks):
    if marks<35:
        print("fail")
    elif marks>35 and marks<90:
        print("pass")
    else:
        print("topper")
marks=int(input("enter value: "))
result(marks)