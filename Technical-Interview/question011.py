"""
Print a single line of  space-separated integers denoting the final state of the array after performing d left rotations.

Sample Input

5 4
1 2 3 4 5

Sample Output

5 1 2 3 4
"""

#!/bin/python3

import sys

def leftRotation(a, d):
    
    #go through range of d
    for x in range(0, d):
        value = a[0]
        del a[0]
        a.append(value)
     
    return a

    # alternative way of rotating left
    val = a[0:d]
    del a[0:d]  
    a.extend(val)
    return a

if __name__ == "__main__":
    n, d = input().strip().split(' ')
    n, d = [int(n), int(d)]
    a = list(map(int, input().strip().split(' ')))
    result = leftRotation(a, d)
    print (" ".join(map(str, result)))
