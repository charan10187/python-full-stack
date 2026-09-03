class Magic_Method():
    def __init__(self,marks):
        self.marks=marks
    def __eq__(self, value) -> bool:
        return self.marks==value.marks

s1=Magic_Method(80)
s2=Magic_Method(80)

print(s1==s2)
