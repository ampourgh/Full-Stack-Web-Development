"""
You are in-charge of the cake for your niece's birthday 
and have decided the cake will have one candle for each year of her total age. 
When she blows out the candles, she’ll only be able to blow out the tallest ones.
"""

#!/bin/python3

import os
import sys

def birthdayCakeCandles(arr):
  
  # check if the passed variable is not an array 
  if not isinstance(arr, list):
      height = [int(h) for h in arr.strip().split(' ')]
      
  return arr.count(max(arr))

# test function on both and array and string with a list of values
array = [3, 2, 1, 3]
print(birthdayCakeCandles(array))
not_array = '3 2 1 3'
print(birthdayCakeCandles(not_array))
