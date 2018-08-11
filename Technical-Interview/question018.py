"""
Hackerland Radio Transmitters

Hackerland is a one-dimensional city with  houses, where each house  is located at some on the -axis. The Mayor wants to install radio transmitters on the roofs of the city's houses. Each transmitter has a range, , meaning it can transmit a signal to all houses  units of distance away.

Given a map of Hackerland and the value of , can you find and print the minimum number of transmitters needed to cover every house in the city? (Every house must be covered by at least one transmitter) Each transmitter must be installed on top of an existing house.

Sample Input 0

5 1
1 2 3 4 5
Sample Output 0

2
Explanation 0

The diagram below depicts our map of Hackerland:

k-nearest(2).png

We can cover the entire city by installing transmitters on houses at locations  and . Thus, we print  on a new line.

Sample Input 1

8 2
7 2 4 6 5 9 12 11 
Sample Output 1

3
Explanation 1

The diagram below depicts our map of Hackerland:

k-nearest2(2).png

We can cover the entire city by installing transmitters on houses at locations , , and . Thus, we print  on a new line.
"""
#!/bin/python3

import sys

def hackerlandRadioTransmitters(x, k):
    # Complete this function
    x = list(map(int, x))
    
    # numerical value that descends from a larger to smaller value
    # .i.e: 3, 2, 1, 0
    for num in range(len(x)-1, 0, -1):
        
        # goes in ascending order here
        for i in range(num):
            
            # bubble sorts, and the larger value will be carried all the way to the end
            if x[i]>x[i+1]:
                x[i], x[i + 1] = x[i + 1], x[i]
                
    sum_x = len(x)
    value = 0
    j = 0
    for i in range(sum_x):
        
        # if the follow up is none, add a value to the current node and exit
        if x[i + 1] == None:
            value += 1
            return value
        
        # else count the nodes until k length is met
        diff = 0
        count = 0
        while diff < k or x[i + count + 1] != None:
            count += 1
            diff = x[i + count] - x[i]
        
        # if the right side between the left side  and main node is empty, return a value    
        if x[i + count + 1] == None:
            value += 1
            return value
        
        # otherwise do the same to right side as what was previously done on the left
        diff = 0
        count_right = 0 + count
        while diff < k or x[i + count_right + 1] != None:
            count_right += 1
            diff = x[i + count_right] - x[i + count]
            
        # if the difference is equal to k length, go to the next item in the array
        if diff == k and (i + count_right + 1) != None:
            i = i + count_right + 1
            value += 1
            return value
        
        
        # else if it's greater than k, stay in the current array value
        if diff > k:
            i = i + count_right
            value += 1
            return value
        
        
if __name__ == "__main__":
    n, k = input().strip().split(' ')
    n, k = [int(n), int(k)]
    x = list(map(int, input().strip().split(' ')))
    result = hackerlandRadioTransmitters(x, k)
    print(result)
