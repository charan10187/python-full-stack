def prime(a):
    for i in range(2,a):
        if a%i==0:
            return False
    return True
# if(prime(11)):
#     print("prime")
# else:
#     print("not prime")
result=[]
num=[17,41,61,11,17,2]
for i in range(len(num)):
    ans=prime(num[i])
    if ans>0:
        result.append(num[i])

print(result)