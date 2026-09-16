# shalo copy and deep copy

# import copy
# a=[10,20,30]
# b=a.copy() 
# b.append(40)
# print(a)   #[10,20,30,40]
# print(b)   #[10,20,30,40]


# a=[10,20,30]
# b=a.copy() 
# b.append(40)
# print(a)    #[10,20,30]
# print(b)    #[10,20,30,40]

# a=[10,20,30]
# b=a[:]
# b[0]=100
# print(a)  #[10,20,30]
# print(b)  #[100,20,30]


import copy
a=[[1,2],[3,4]]
b=copy.copy(a) 
b[0][0]=100
print(a)
print(b)

import copy
a=[10,20,30,[1,2],[3,4]]
b=copy.copy(a) 
b[2]=100
print(a)
print(b)
