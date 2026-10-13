class MovieTicket:
    def __init__(self,movie,user,tickets,price):
        self.movie=movie
        self.user=user
        self.tickets=int(tickets)
        self.price=int(price)
        
    def display_booking(self):
        print(f"Movie: {self.movie}")
        print(f"Customer: {self.user}")
        print(f"Tickets: {self.tickets}")
        print(f"Price per Ticket: {self.price}")

    def Calculate_total(self):
        Total_Amount=self.tickets*self.price
        print(f"Total Amount:{Total_Amount}")

    def cancle_ticket(self,count):
        if self.tickets>=count:
            self.tickets=self.tickets-count
            print("ticket cancelled successfully")
        else:
            print(f"canclation ticket count:{count} is greater than booked tickets:{self.tickets}")

    def check_booking(self):
        if self.tickets>0:
            print(f"{self.tickets}'s Confirmed")
        else:
            print("Cancelled")

    def who_spent_more(self,other):
            if self.Calculate_total()>other.Calculate_total():
                print(f"{self.user} has spent more")
            else:
                print(f"{other.user} has spent more")
                

# class Difference(MovieTicket):
#     def who_spent_more(self,other):
#         if self.Calculate_total()>other.Calculate_total():
#             print(f"{self.name} has spent more")
#         else:
#             print(f"{other.name} has spent more")
            
            

charan=MovieTicket("DC","charan","3","369")
loki=MovieTicket("DC","loki","8","369")
# charan.display_booking()
# charan.Calculate_total()
# charan.cancle_ticket(2)
# charan.check_booking()
charan.who_spent_more(loki)
    