import time
from threading import Thread

def task(name):
    print(f'starting task {name}')
    time.sleep(2)
    