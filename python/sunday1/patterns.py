def pattern1(n):
    for i in range(1,n+1):
        print(" "*(n-i)+"*"*(2*i-1))

def pattern2(n):
    for i in range(1,n+1):
        print(" "*(i-1)+"*"*(2*(n-i)+1))
pattern2(4)