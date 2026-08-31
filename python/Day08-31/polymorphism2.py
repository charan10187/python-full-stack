class Squre():
    def __init__(self,side):
        self.side=side
    def area(self):
        print(self.side*self.side)

class Rectangle():
    def __init__(self,height,weight):
        self.height=height
        self.weight=weight
    def area(self):
        print(self.weight*self.height)

# over riding

a=Squre(10)
a.area()




