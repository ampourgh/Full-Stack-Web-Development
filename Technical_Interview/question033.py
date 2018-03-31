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

def squares(arr):
    count = 0
    for i in range(arr[0], (arr[1]+1)):
        if sqrt(i) % 1 == 0:
            count += 1
    print(count)
        
def sqrt(x):
    return x**(1/2) 
              
if __name__ == "__main__":
    q = int(input().strip())
    arr = []
    for a0 in range(q):
        a, b = input().strip().split(' ')
        a, b = [int(a), int(b)]
        arr.append(a)
        arr.append(b)
        squares(arr)
        arr = []
