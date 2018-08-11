"""
Consider an array of numeric strings, , where each string is a positive number with anywhere from  to  digits. Sort the array's elements in non-decreasing (i.e., ascending) order of their real-world integer values and print each element of the sorted array on a new line.

Output Format

Print each element of the sorted array on a new line.

Sample Input 0

6
31415926535897932384626433832795
1
3
10
3
5
Sample Output 0

1
3
3
5
10
31415926535897932384626433832795

"""

#!/bin/python3

import sys

def bigSorting(arr):

    # convert the values into an integor 
    arr = list(map(int, arr))
    
    # numerical value that descends from a larger to smaller value
    # .i.e: 3, 2, 1, 0
    for num in range(len(arr)-1, 0, -1):
        
        # goes in ascending order here
        for i in range(num):
            
            # bubble sorts, and the larger value will be carried all the way to the end
            if arr[i]>arr[i+1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
    return arr


if __name__ == "__main__":
    n = int(input().strip())
    arr = []
    arr_i = 0
    for arr_i in range(n):
       arr_t = str(input().strip())
       arr.append(arr_t)
    result = bigSorting(arr)
    print ("\n".join(map(str, result)))
    
print(bigSorting(['6', '31415926535897932384626433832795', '1', '3', '10', '3', '5']))
print(bigSorting(['62', '8', '3', '8', '46', '1', '6', '9']))
print(bigSorting(['54', '19', '3', '1', '23']))
