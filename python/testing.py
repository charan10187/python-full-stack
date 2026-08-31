# '''
# Example 1:

# Input: num = 38
# Output: 2
# Explanation: The process is
# 38 --> 3 + 8 --> 11
# 11 --> 1 + 1 --> 2 
# Since 2 has only one digit, return it.
# '''



# # print(sum([ int(i) for i in st_num]))

# def repeat(num):
#     st_num=str(num)

#     if len(st_num)==1:
#         return st_num
#     else:
#         res=sum([ int(i) for i in st_num])
#         num=repeat(res)
#         return num

# print(repeat(1111111))

class MovieTicket:
    def __init__(self, movie, user, tickets, price):
        self.movie = movie
        self.user = user
        self.tickets = int(tickets)
        self.price = int(price)

    def Calculate_total(self):
        return self.tickets * self.price

    def who_spent_more(self, other):
        if self.Calculate_total() > other.Calculate_total():
            print(f"{self.user} has spent more")
        else:
            print(f"{other.user} has spent more")


charan = MovieTicket("DC", "charan", 3, 369)
loki = MovieTicket("DC", "loki", 8, 369)

charan.who_spent_more(loki)