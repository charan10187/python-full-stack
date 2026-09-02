class Dog():
    def speak(self):
        print("Bark..")

class Cat(Dog):
    def speak(self):
        print("meow..")

obj1=Dog()
obj2=Cat()
obj1.speak()
obj2.speak()