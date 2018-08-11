def add(array):

  diction = dict()
  array = sorted(array)
  prev_value = None
  indexu = 1

  for i in range(len(array)):

    if array[i] == prev_value:
      indexu += 1
      prev_value = array[i]
      if i + 1 != len(array):
        if array[i] != array[i + 1]:
          diction[i] = [array[i], indexu]
          indexu = 1
      else:
        diction[i] = [array[i], indexu]
        indexu = 1
        
    else:
      if i + 1 != len(array):
        prev_value = array[i]
        if array[i] == array[i + 1]:
          pass
        else:
          diction[i] = [array[i], indexu]
          indexu = 1
  
  print(diction)
  array = []
  for index, val1 in diction.items():
    array.append(val1)
    
  def getKey(item):
    return item[1]
    
  array = sorted(array, key = getKey)
  array = array[::-1]
  
  for setVals in array:
    print("%s: %s" % (setVals[0], setVals[1]))
    

arr = ['NA', 'NA', 'NA', 'EU', 'KO', 'CH', 'CH', 'CH', 'CH', 'KO', 'KO', 'KO', 'KO', 'KO', 'KO', 'KO', 'KO', 'Wildcard'] 
add(arr)

"""
>>> {3: ['CH', 4], 4: ['EU', 1], 13: ['KO', 9], 16: ['NA', 3]}
KO: 9
CH: 4
NA: 3
EU: 1
"""
