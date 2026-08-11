arr=[10,20,30,40,50,60,70,80,90]
max=arr[0]
for i in range(len(arr)):
    if arr[i]> max: 
        max=arr[i]
print(max)