'''
   OOPs

i  1*
   2**
   3***
   4****
j   1234
'''

# for i in range(4):
#     print("*"*i)

for i in range(5,0,-1):
    for j in range(i):
        print("*",end=" ")
    print()
    