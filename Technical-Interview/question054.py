"""
n = number of prisoners
m = the number of meals that that were served
s = The seat that starts getting meals - before sequentially going down

The last meal has poison, which prisoner perished?
"""

# First attempt
def saveThePrisoner(n, m, s):
    state = False
    for i in range(n):
        i += 1
        if i == s or state == True:
            state = True
            if (m == 1):
              print(i)
            m -= 1

# Alternative method
def saveThePrisoner2(n, m, s):
    a = 0
    a = (m+s-1) % n
    if a == 0:
        print(n)
    else:
        print(a)

saveThePrisoner(5, 2, 1)
saveThePrisoner(5, 2, 2)
saveThePrisoner2(5, 2, 1)
saveThePrisoner2(5, 2, 2)
