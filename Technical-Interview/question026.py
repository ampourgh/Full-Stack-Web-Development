"""
Self-made binary search to showcase O(log N) efficiency.
"""

from datetime import datetime

def binarySearch(array, searchVal):
  timeStart = datetime.now()
  while True:
    if array[0] != None: 
      arrayLen = len(array)
    else:
      print("%s is not in this array." % (str(searchVal)))
      return False
    
    if arrayLen % 2 == 0:
      midpoint = arrayLen / 2
      print(midpoint)
      if searchVal == array[midpoint - 1]:
        printStatement(timeStart, searchVal)
        return False
      elif searchVal == array[midpoint]:
        printStatement(timeStart, searchVal)
        return False
      elif searchVal > array[midpoint]:
        midpoint += 1
        arrayLen -= 1
        array = array[midpoint:arrayLen]
      else:
        midpoint -= 2
        array = array[0:midpoint]
    else:
      midpoint = arrayLen / 2
      print(midpoint)
      if searchVal == array[midpoint]:
        printStatement(timeStart, searchVal)
        return False  
      elif searchVal > array[midpoint]:
        midpoint += 1
        arrayLen -= 1
        array = array[midpoint:arrayLen]
      else:
        midpoint -= 1
        array = array[0:midpoint]
        
def printStatement(timeStart, searchVal):
  timeEnd = datetime.now()
  timeTook = timeEnd - timeStart
  print("Found %s in %s microseconds!" % (str(searchVal), str(timeTook)))
        
  
    
array = [1, 2, 3, 4, 5, 6, 7]
searchVal = 2
binarySearch(array, searchVal)

array2 = [1, 2, 3, 4, 5, 6, 7, 8]
searchVal2 = 5
binarySearch(array2, searchVal2)
