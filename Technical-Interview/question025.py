"""
Given an array, find a pair of numbers that would equal to the sum value input.
"""

def greaterThan(sumVal, array):
  l = 0
  r = (len(array) - 1)
  while True:
    if l == r:
      print('Could not match a pair.')
      return False 
    if array[l] >= sumVal:
      print('Values in array are greater than 8.')
      return False 
    if array[r] >= sumVal:
    	r -= 1
    if array[l] < sumVal and array[r] < sumVal:
    	sumCompare = array[l] + array[r]
    	if sumCompare == sumVal:
    		print("The pair includes " + str(array[l]) + " and " + str(array[r]) + ".")
    		return False
    	elif sumCompare > sumVal:
    		r -= 1
    	else:
    		l += 1
		
sum1 = 8
array1 = [1, 2, 3, 9] 
array2 = [1, 2, 4, 4] 
greaterThan(sum1, array1)
