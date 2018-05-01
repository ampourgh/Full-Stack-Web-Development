# returns none duplicate pairs of 2

def merge_the_tools(string):
    arr = []
    next = True
    print(k)
    for index, alphabet in enumerate(string):
        if (index + 1) < len(string): 
            if alphabet == string[(index + 1)] and next == True:
                pass
            elif next == False:
                next = True
            else:
                val = alphabet + string[(index + 1)]
                arr.append(val)
                next = False
    for item in arr:
        print(item)
        

# length of string is divided by k to produce an array of strings
# used dictionary to take out the repeating letters

def merge_the_tools(string, k):
    arr = []
    arr2 = []
    grp = ''
    div = len(string) / k
    count = 0
    for alpha in string:
        grp += alpha 
        count +=1
        if count == div:
            arr.append(grp)
            count = 0
            grp = ''
    for item in arr:
        
        diction = dict()
        
        for index, value in enumerate(item):
            diction[value] = index
        
        arr2.append(diction)
        
        diction = None;
    
    print(arr2)
    
    grp2 = ''
    for item in arr2:
        for i in item:
            grp2 += i[0]            
        print(grp2)
        grp2 = ''

# Correct method - O(n*n):
# poor efficiency, low space necessity

def merge_the_tools(s, n):  
  
  # [iter(s)]*n -- iterates the string n times 
  # an iterator is an object that is used traverse a container, 
  # particularly lists. 
  # EX: [[iter(s)] * 3] = ([iter(s), iter(s), iter(s)])
  
  iter_string = [iter(s)] * n
  
  for part in zip(*iter_string):
    
    # since all the iterators are the same, 
    # they are divided into 3
    # EX: 
    # ('A', 'A', 'B')
    # ('d', 'e', 'f')
    # ('g', 'h', 'i')
      
    d = dict()
    
    # search dict() for each value in divided string,
    # if item not found, return value into list
    uniques = [ d.setdefault(c, c) for c in part if c not in d ]
    print(''.join(uniques))
      
merge_the_tools('AABCAAADA', 3)


# user version
print('\nUser version:')
for section in zip(*[iter('123456789')]*3):
  print(''.join(section))
  
# expanded
print('\nexpanded version:')
s = 'abcdefghi'
it = iter(s)
for part in zip(it, it, it):
    print(''.join(part))


# MORE READABLE METHOD

def merge_the_tools(s, k):
  
  n = len(s)
  
  #intervals of 3: 0, 3, 6
  for x in range(0, n, k):
      
    # sliced = AAB = s[0:3]
    sliced_str = s[x : x + k]
    
    arr =[]
    arr2 =[]

    for alpha in sliced_str:
      
      # lengthier method
      
      if not arr:
        arr.append(alpha)
      else:
        if any(alpha == i for i in arr):
          pass
        else: 
          arr.append(alpha)
          
      # shortened method
      if alpha not in arr2:
        arr2.append(alpha)
        
    print ''.join(arr)
    print ''.join(arr2)
    
merge_the_tools('AABCAAADA', 3)
