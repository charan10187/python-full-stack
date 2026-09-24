# names=['charan','prasad','atul']

# iterator=iter(names)

# # iter() method converts list( one kind of iterable) into iterator

# print(next(iterator))
# print(next(iterator))
# print(next(iterator))

# ========================================================

def display():
    yield "hello"
    yield "Good evening"
    yield "byee"

greeting=display()

print(next(greeting))
print(next(greeting))
print(next(greeting))
