arr=[10,20,30,40,50,60,70,80,90]
sum=0
for _ in range(0,len(arr)):
    sum=sum+arr[_] 
print(sum)



bowls=["red","blue","black","red","blue","red","red","blue"]
sum=""
count=0
for ch in range(0,len(bowls)):
    if bowls[ch]=="red":
        count+=1
    print(bowls[ch],count)
print("red counnt=",count)




arr=[10,20,30,40,50,60,70,80,90]
odd_sum=0
even_sum=0
for i in range(0,len(arr)):
    if i%2==0:
        even_sum=even_sum+arr[i]
    else:
        odd_sum=+odd_sum+arr[i]
print(even_sum,odd_sum)



# reversing
num=123
last_digit=0
sum=0
while num>0:
    last_digit=num%10
    sum=sum*10+last_digit
    num=num//10
print(sum)
