# Python Case Statement

# define the function blocks
# have to keep following order, or else recieve NameError:
# NameError: name 'nothing' is not defined
def nothing():
    print "nothing\n"

def something():
    print "something something\n"

def anything():
    print "anything is anything\n"

def everything():
    print "everything\n"

# map the inputs to the function blocks
options = {
           0 : nothing,
           1 : something,
           2 : anything,
           3 : everything,
           6 : everything,
           9 : everything,
}

# Maintain order or NameError:
# NameError: name 'options' is not defined

arr = [1, 0, 9]

for i in arr:
  options[i]()
