"""
Context 
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g

There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values.

Task 
Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Input Format

There are  lines of input, where each line contains  space-separated integers describing 2D Array ; every value in  will be in the inclusive range of  to .

Constraints

Output Format

Print the largest (maximum) hourglass sum found in .

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output

19

Explanation
contains the following hourglasses:

1 1 1   1 1 0   1 0 0   0 0 0
  1       0       0       0
1 1 1   1 1 0   1 0 0   0 0 0

0 1 0   1 0 0   0 0 0   0 0 0
  1       1       0       0
0 0 2   0 2 4   2 4 4   4 4 0

1 1 1   1 1 0   1 0 0   0 0 0
  0       2       4       4
0 0 0   0 0 2   0 2 0   2 0 0

0 0 2   0 2 4   2 4 4   4 4 0
  0       0       2       0
0 0 1   0 1 2   1 2 4   2 4 0

The hourglass with the maximum sum () is:

2 4 4
  2
1 2 4

"""

#!/bin/python3

import sys

arr = []
for arr_i in range(6):
   arr_t = [int(arr_temp) for arr_temp in input().strip().split(' ')]
   arr.append(arr_t)
    
# put the 2D array in a single array
new_array = []
for row in arr:
    for number in row:
        new_array.append(number)

# start a counter that will be used for the iteration of the 'I' in the array
counter = 0      

# Greatest value starts off as a low value
greatest_value = -1000 

for i in new_array:

    # start with an empty array each iteration that gets summed up at the end
    value = []
    
    # put all values in the 'I' in the array, with each row in the 'I' summed up
    value.append(sum(new_array[counter:(3 + counter)]))
    value.append(sum(new_array[(7 + counter):(8 + counter)]))
    value.append(sum(new_array[(12 + counter):(15 + counter)]))
    
    # if the sum of the array is greater than the previous greatest value, 
    # become the greatest value
    if sum(value) > greatest_value:
        greatest_value = sum(value)
    
    # if the counter is at the end of the 2D array, 
    # print the greatest value and exit out of the loop
    if counter == (len(new_array) - 15):
        print(greatest_value)
        break
        
    # if 'I' gets top and bottom get to the end of the row, go to the next row    
    if (counter + 3) % 6 == 0:
        counter += 2
        
    counter += 1
