'''
Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
'''



# print(sum([ int(i) for i in st_num]))

def repeat(num):
    st_num=str(num)

    if len(st_num)==1:
        return st_num
    else:
        res=sum([ int(i) for i in st_num])
        num=repeat(res)
        return num

print(repeat(1111111))