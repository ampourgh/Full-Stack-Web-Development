A0 = dict(zip(
              ('a', 'b', 'c', 'd', 'e'),
              (0, 1, 2, 3, 4))
             )
A1 = range(10) # (0, 1, 2, .., 9)
A2 = sorted([i for i in A1 if i in A0])
A3 = sorted([A0[s] for s in A0])
A4 = [i for i in A1 if i in A3]
A5 = {i:i*i for i in A1}
A6 = [[i,i*i] for i in A1]
A7 = zip(
         ('a','b','c','d','e'),
         (0,1,2,3,4), 
         ('z', 'y', 'x', 'w', 'v')
         )

arr = [A0, A1, A2, A3, A4, A5, A6, A7]
for A in arr:
  print(A)

print('\n-----\n')

help(zip)

print('\n-----\n')

def f(x,l=[]):
    for i in range(x):
        l.append(i*i)
    print(l) 

f(2)
f(2)
f(3,[3,2,1])
f(3)

print('\n-----\n')

def f(*args,**kwargs): print(args, kwargs)

f(0, 1, 2, "string")
f(a = 1, b = 2, c = 3, string = 'string') 
f(1, 2, 3, a = 1, b = 2, c = 3) 

l = [1, 2, 3]
t = (4, 5, 6)
d = {'a' : 7, 'b' : 8, 'c' : 9}

f(1, 2, *t, string = "string", **d) 
f(4, 5, *l)
