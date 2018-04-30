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
