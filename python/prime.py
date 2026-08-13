def prime(a):
    for i in range(2,a):
        if a%i==0:
            return False
    return True
if(prime(11)):
    print("prime")
else:
    print("not prime")
