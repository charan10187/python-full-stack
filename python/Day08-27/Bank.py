class BankAccount:
    def __init__(self,name,acc_no,amt) -> None:
        self.name=name
        self.acc_no=acc_no
        self.amt=amt

    def deposit(self,depo):
        self.amt=self.amt+depo

    def WithDraw(self,wda):
        if self.amt>=wda:
            self.amt=self.amt-wda        

    def balance(self):
        return self.amt

charn=BankAccount("charan","10187",1000)
loki=BankAccount("loki","10188",9000)
loki.deposit(1000)
print(loki.balance())