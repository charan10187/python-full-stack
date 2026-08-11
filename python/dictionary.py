student={
    "name":"charan",
    "age":22,
    "city":"hyd"
}
print(student.keys())
print(student.items())
print(student.values())
if len(student.items())==0:
    print("empty")
else:
    print("not empty")
print(student["name"])
print(student.get("age"))

student=["charan","lokesh","kaif","kushal","akram"]
for _ in range(len(student)):
    print(_,student[_])
for _ in student:
    print(_)