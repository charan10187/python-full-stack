arr=[10,20,30,40,50,60,70,80,90]
maximum=arr[0]
minimum=arr[0]
for i in range(len(arr)):
    if arr[i]> maximum: 
        maximum=arr[i]
    if arr[i]<minimum:
        minimum=arr[i]
print("max=",maximum,"minimum=",minimum)
