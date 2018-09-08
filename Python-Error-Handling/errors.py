try:
  def boolean():
    if not True: return False
  boolean(True)
except BaseException as e:
    print("Error Code:",e)

# ('Error Code:', TypeError('boolean() takes no arguments (1 given)',))

try:
    a = int(1)
    b = int(0)
    print(a % b)

except(ZeroDivisionError or ValueError) as e:
    print("Error Code", e)

# ('Error Code', ZeroDivisionError('integer division or modulo by zero',))

arr = ['1', '2', 'third']

for i in range(3):
    try:
        intVal = int(arr[i])
    except BaseException as e:
        print("Error Code:",e)

# ('Error Code:', ValueError("invalid literal for int() with base 10: 'third'",))

n = 10

try:
  def push(variable):
    pull(variable)

  def pull(variable):
    push(variable)

  push('Ball')
except BaseException as e:
    print("Error Code:",e)

# ('Error Code:', RuntimeError('maximum recursion depth exceeded',))

try:
  def pi():
    pi = 0
    for k in range(350):
        pi += ((4./(8.*k+1.) - 2./(8.*k+4.)
               - 1./(8.*k+5.) - 1./(8.*k+6.)
               / 16.**k))
    return pi
  print(pi())
except BaseException as e:
    print("Error Code:",e)

# ('Error Code:', OverflowError(34, 'Numerical result out of range'))

try:
  fromfirsttolast = alpha + omega
except BaseException as e:
    print("Error Code:",e)

# ('Error Code:', NameError("name 'alpha' is not defined",))

try:
  arr = []
  print(arr[0])
except BaseException as e:
    print("Error Code:",e)

# ('Error Code:', IndexError('list index out of range',))
