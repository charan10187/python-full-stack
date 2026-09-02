#  2D Array 

matrix=[[2*x for x in range(0,5)] for x in range(0,4)]

print(matrix)

for i in range(len(matrix)):
    for j in range(len(matrix)):
        print(matrix[i][j],end=" ")
    print()