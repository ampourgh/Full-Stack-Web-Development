"""
Closest Numbers

Sorting is often useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses, as well.

Challenge 
Given a list of unsorted integers, , can you find the pair of elements that have the smallest absolute difference between them? If there are multiple pairs, find them all.

Input Format 
The first line of input contains a single integer, , representing the length of array . 
In the second line, there are  space-separated integers, , representing the elements of array .

Output Format 
Output the pairs of elements with the smallest difference. If there are multiple pairs, output all of them in ascending order, all on the same line (consecutively) with just a single space between each pair of numbers. If there's a number which lies in two pair, print it two times (see the sample case #3 for explanation).
"""

#!/bin/python3

import sys

def closestNumbers(arr):
    
    arr = sorted(arr)
    
    # declare variables and array
    sum, num1, num2 = abs(arr[0] - arr[1]), None, None
    array = []
    
    # go through the entirety of the array
    for num in range(len(arr) - 1):
        compare = abs(arr[num] - arr[num + 1])
        
        # if the difference between the numbers is the same as the current lowest value
        if compare == sum:
            array.extend((arr[num], arr[num + 1]))'
            
        # if new low value is found, empty the array
        if compare < sum:
            array = []
            sum, num1, num2 = compare, arr[num], arr[num + 1]
            array.extend((num1, num2))
    
    return array
    
closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854])
closestNumbers([-5935536, -4857144, 8762611, -3710156, -62196, 5726532, 3880783, 8228893, 4557632, 8243459, 8058689, -2004515, -2532128, -2809277, 6230123, -1534444])
closestNumbers([5, 4, 3, 2])
