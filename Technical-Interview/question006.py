#!/bin/python3

import sys

def simpleArraySum(n, ar):
    # Complete this function
    sum = 0
    for index, item in enumerate(ar):
        sum += item
        
        if (index + 1) == n:
            return sum

# question looks at the length, the question asks for 6
n = int(input().strip())

# list has the following values: [1, 2, 3, 4, 10, 11]
ar = list(map(int, input().strip().split(' ')))

result = simpleArraySum(n, ar)

# will return a sum of 31
print(result)
