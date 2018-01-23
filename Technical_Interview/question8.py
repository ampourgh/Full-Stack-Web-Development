#!/bin/python3

import sys

# create function with n number of content, arr being the array
def try_this(n, arr):

    # the array is cut off at n, then reversed 
    arr = arr[0:n]
    arr = arr[::-1]

    # a string is created that stores the output in string format
    new_arr = ""
    for item in arr:
        new_arr += str(item) + " "
    return(new_arr)
 
n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

print(try_this(n, arr))
