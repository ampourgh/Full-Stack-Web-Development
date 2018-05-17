def add(array):
  diction = dict()
  array = sorted(array)
  prev_value = ""
  indexu = 0
  narray = []
  for index, value in enumerate(array):
    
    indexu += 1
    
    diction[indexu] = value
    
    if value == prev_value:
      prev_value = value
    else:
      indexu = 0
      prev_value = value
      narray.append(diction)
  
  print(narray)
  
  array = []
  for index, value in enumerate(diction):
    array.append(value)
    
  print(array)

arr = ['UK', 'China', 'USA', 'France', 'New Zealand', 'UK', 'France', 'USA', 'China'] 
add(arr)
