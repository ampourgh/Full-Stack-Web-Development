def add(array):
  diction = dict()
  array = sorted(array)
  prev_value = None
  indexu = 1
  narray = []
  for i in range(len(array)):
    print(array[i])
    print(prev_value)
    print(indexu)
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
      prev_value = array[i]
      if array[i] == array[i + 1]:
        pass
      else:
        diction[i] = [array[i], indexu]
        indexu = 1
      
  
  print(diction)
  # array = []
  # for index, value in enumerate(diction):
  #   array.append(value)
    
  # print(array)

arr = ['UK', 'China', 'China', 'China', 'USA', 'USA', 'France', 'New Zealand', 'UK', 'France', 'USA', 'China', 'USA', 'USA'] 
add(arr)

# >>> {3: ['China', 4], 5: ['France', 2], 6: ['New Zealand', 1], 8: ['UK', 2], 13: ['USA', 5]}
