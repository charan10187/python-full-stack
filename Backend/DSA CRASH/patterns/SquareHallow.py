n=int(input("Enter number:"))

# for i in range(0,n):
#     for j in range(0,n):
#         if i==0 or j==0 or i ==n-1 or j==n-1:
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()


# shortest method

for i in range(n):
    print(" * " * n if i in (0, n-1) else " * " + "   " * (n-2) + " * ")