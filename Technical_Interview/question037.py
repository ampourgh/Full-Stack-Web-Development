"""

Strange Counter

input:
4

Process:

Array doubles with each iteraction.

Arr: 3, 2, 1
Arr2: 6, 5, 4, 3, 2, 1

Input of 4 ends stops at 6 when counting down.

Output:
6

"""

def strangeCounter(t):
    n = 3
    while True:
        count = []
        for x in range(1, (n + 1)): count = [x] + count
        print(count)
        for i in count:
            t -= 1
            if t == 0:
                return i 
            if i == 1:
                n *= 2
                
print(strangeCounter(24))
