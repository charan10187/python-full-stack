def decorator(fun):
    def wrapper():
        print("before")
        fun()

    return wrapper

@decorator
def greet():
    print("good")

greet()