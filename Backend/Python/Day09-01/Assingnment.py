class Employee:
    def __init__(self,name,salary):
        self.name=name
        self.salary=salary

    def display(self):
        print(self.name,self.salary)

    def increase_salary(self,percent):
        self.salary+=(self.salary*percent)/100
        print(f"After {percent}% increase :")
        print(f"Salary:{self.salary}")

    def demo():
        pass

    def demo2():
        pass



E1=Employee("charan",25000)
E1.display()
E1.increase_salary(25)