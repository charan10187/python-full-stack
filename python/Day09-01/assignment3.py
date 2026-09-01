class Shape:
    def __init__(self,length,width=0) -> None:
        self.length=length
        self.width=width
    def area(self):
        pass

class Rectangle(Shape):
    def area(self):
        print(self.length*self.width)

class Circle(Shape):
    def area(self):
            print(3.14*(self.length*self.length))

s=Shape(20,30)
s.area()

r=Rectangle(10,20)
r.area()

c=Circle(5)
c.area()