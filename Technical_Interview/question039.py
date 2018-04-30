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
