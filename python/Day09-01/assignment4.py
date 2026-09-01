class Student:
    def __init__(self,name,marks):
        self.name=name
        self.__marks=marks

    def get_marks(self):
        print(self.__marks)

    def set_marks(self,marks):
        self.marks=marks
        if marks>0 and marks<100:
            self.__marks=marks
        else:
            print("marks out of range")


std1=Student("charan",99)
std1.get_marks()
std1.set_marks(150)