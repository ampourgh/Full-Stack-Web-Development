# syntax goes from larger to smaller from either side

listVal = [4, 3, 2, 1, 3, 4]
def checkCube(list_val): 
  count = 1
  for number in list_val:
      inverse = count * -1 
      if (list_val[count] + 1) == list_val[::inverse] or list_val[count] == (list_val[::inverse] + 1):
          count += 1
      if (count >= (len(listVal) / 2)):
        return True
      else:
        return False
      
checkCube(listVal)
