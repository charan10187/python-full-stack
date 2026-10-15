n=int(input("Enter number:"))

for i in range(0,n):
    for j in range(0,n):
        if i==j or i+j==n-1:
            print("*",end=" ")
        else:
            print(" ",end="")
    print()