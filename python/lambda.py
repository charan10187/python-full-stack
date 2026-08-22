'''
   Lambda is known as anonymous functions meaning 
   they do not require a function name
   * lambda can contain only one expression
   * the expression's result is returned automatically
   
   * lambda is commonly used with 
      map(),
      filter(),
      sorted().

'''

squ=lambda n:n*n

print(squ(5))

sum=lambda a,b: a+b
print(sum(10,20))

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda number: number % 2 == 0, numbers))

print(even_numbers)  # [2, 4, 6]

result=list(map(lambda x:x*2,even_numbers))

print(result)


