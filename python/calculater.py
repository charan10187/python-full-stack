def calculater(oper,val): 
    result=[]
    print(type(result))
    if oper=="+":
        for _ in range(0,len(val)):
            print(val[_])
            [val[_]]
            print(type(val[_]))
            # result=result+val[i]
            # print(result)
    #     return result
    # elif oper=="-":
    #     for i in range(0,len(val)):
    #         result=val[i]-result
    #     return result
    # elif oper=="*":
    #     for i in range(0,len(val)):
    #         result=val[i]*result
    #     return result
    # elif oper=="/":
    #     val[0]/val[1]
    #     return result
    # else:
    #      return "invalid"
s=input("enter values: ")
val=[s]
print(type(val))
print("+","-","*","/")
oper=input()
# print(type(oper))
calculater(oper,val)


