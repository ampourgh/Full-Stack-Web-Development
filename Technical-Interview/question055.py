# syntax goes from larger to smaller from either side

listVal = [4, 3, 2, 1, 3, 4]
def checkCube(list_val): 
  count = 0
  list_val_inverse = list_val[::-1]
  for number in list_val:
      print(list_val[count])
      print(list_val_inverse[count])

      if (list_val[count] == list_val_inverse[count] 
          or (list_val[count] + 1) == list_val_inverse[count] 
          or (list_val[count] - 1) == list_val_inverse[count]):

          count += 1
      else:
        return False
        
      if (count >= (len(list_val) / 2)):
        return True
      
print(checkCube(listVal))
