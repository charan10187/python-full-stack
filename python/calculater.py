def calculater(oper,val): 
    result=[]
    print(type(result))
    if oper=="+":
        for i in range(0,len(val)):
            print(val[i])
            [val[i]]
            print(type(val[i]))
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
val=[int(input("enter values: "))]
# print(val)
print(val)
print("+","-","*","/")
oper=input()
# print(type(oper))
calculater(oper,val)


