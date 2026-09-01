class Vehicle:
    def __init__(self,brand,speed):
        self.brand=brand
        self.speed=speed

class Car(Vehicle):
    def __init__(self, brand, speed):
        super().__init__(brand, speed)
    def show_vehicle(self):
        print(f"car {self.brand}")
        print(f"speed : {self.speed}")
        print("Type : Four Wheeler")

class Bike(Vehicle):
    def __init__(self, brand, speed):
        super().__init__(brand, speed)
    def show_vehicle(self):
        print(f"Bike {self.brand}")
        print(f"speed : {self.speed}")
        print("Type : Two Wheeler")

car1=Car("Honda",120)
car1.show_vehicle()

bike1=Bike("Yamaha",150)
bike1.show_vehicle()
