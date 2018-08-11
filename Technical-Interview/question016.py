#!/bin/python3

"""
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

Function Description

Complete the diagonalDifference function in the editor below. It has one parameter:

2D Integer Array, , denoting the elements in the matrix.
The function must return an integer denoting the absolute difference between the diagonal sums.

Constraints

Raw Input Format

The first line contains a single integer,  denoting the number of rows and columns in the matrix . 
The next  lines denote the matrix 's rows, with each line containing  space-separated integers describing the columns.

Sample Input 0

3
11 2 4
4 5 6
10 8 -12
Sample Output 0

15
Explanation 0

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19 
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x
"""

import sys

def diagonalDifference(a):
    
    i = 0
    j = len(a[0]) - 1

    sum_l = 0
    sum_r = 0
    sum_t = 0
    
    for row in a:

        sum_l += row[i]
        sum_r += row[j]
        i += 1
        j -= 1
    
    sum_t = sum_l - sum_r
    
    if sum_t <= 0:
        sum_t *= -1
    
    return sum_t
    

if __name__ == "__main__":
    a = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
    b = [[-1, 1, -7, -8], [-10, -8, -5, -2], [0, 9, 7, -1], [4, 4, -2, 1]]
    c = [[-10, 3, 0, 5, -4], [2, -1, 0, 2, -8], [9, -2, -5, 6, 0], [9, -7, 4, 8, -2], [3, 7, 8, -5, 0]]
    result, result2, result3 = diagonalDifference(a), diagonalDifference(b), diagonalDifference(c)
    print(result)
    print(result2)
    print(result3)
