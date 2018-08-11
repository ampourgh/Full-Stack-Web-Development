#!/bin/python3

import sys

def bubbleSort(arr):

    i = 0
    x = True
    
    while(x != False):
        for num in range(len(arr) - 1):
            if arr[num] > arr[num + 1]:
                arr[num], arr[num + 1] = arr[num + 1], arr[num]
                i += 1
        if i == 0:
            x = False
        i = 0
        
    print(arr)
bubbleSort([7, 3, 5, 1, 12, 0, 23, 7, 4])
bubbleSort([5, 3, 1, 3, 4, 5, 2, 4])
