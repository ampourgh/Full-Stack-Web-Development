"""
Lily's Homework

Output Format:
Print the minimum number of swaps that should be performed in order to make the array beautiful.

Sample Input:
4
2 5 3 1

Sample Output:
2
"""

#!/bin/python3

import sys

def homework(n, arr):

    # ordered value in dictionary : index value
    # item_index = {1: 3, 2: 0, 3: 2, 5: 1}
    item_index = dict()
    
    for index, number in enumerate(arr):
        item_index[number] = index
    
    # count number of times orginal array and sorted array do not match
    # followed by a swap when not matching
    counter = 0
    sorted_arr = sorted(arr)

    for i in range(len(arr)):
        if arr[i] is not sorted_arr[i]:
            counter += 1

            new_index = item_index[sorted_arr[i]]
            item_index[arr[i]] = new_index
            arr[i], arr[new_index] = arr[new_index], arr[i]

    return counter


n = int(input().strip())
arr = list(map(int, input().strip().split()))

asc = homework(n, list(arr[::]))
desc = homework(n, list(arr[::-1]))
print(min(asc, desc))
