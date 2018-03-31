"""
Output Format

For each test case, print the number of square integers in the range on a new line.

Sample Input

2
3 9
17 24
Sample Output

2
0
"""

#!/bin/python3

import sys

def squares(arr1, arr2):
    count1 = 0 
    count2 = 0 
    for i in range(arr1[0], (arr1[1]+1)):
        if sqrt(i) % 1 == 0:
            count1 += 1
    print(count1)
    for j in range(arr2[0], (arr2[1]+1)):
        if sqrt(j) % 1 == 0:
            count2 += 1
    print(count2)
        
def sqrt(x):
    return x**(1/2) 
              
if __name__ == "__main__":
    q = int(input().strip())
    arr1 = []
    arr2 = []
    plus = 1
    for a0 in range(q):
        a, b = input().strip().split(' ')
        a, b = [int(a), int(b)]
        if plus == 1:
            arr1.append(a)
            arr1.append(b)
            plus += 1
        else:
            arr2.append(a)
            arr2.append(b)
    squares(arr1, arr2)
