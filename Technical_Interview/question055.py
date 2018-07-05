# syntax goes from larger to smaller from either side

list = [4, 3, 2, 1, 3, 4]

count = 1
for number in list:
    inverse = count * -1 
    if (list[count] + 1) == list[::inverse] or list[count] == (list[::inverse] + 1):
        pass
    else:
        return false
return true
    
