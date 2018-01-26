#!/bin/python3

import sys

def solve(a0, a1, a2, b0, b1, b2):
    # Complete this function
    
    # put their scores in an array so we're able iterate through the values through a loop
    a = [a0, a1, a2]
    b = [b0, b1, b2]
    
    Alice = 0 
    Bob = 0
    
    counter = 0
    for item in a:
    
        # compares scores, if one person has a score higher than the other, they recieve a point
        # if they both have the same score, no one recieves a point 
        
        if item > b[counter]:
            Alice += 1
            
        elif item < b[counter]:
            Bob += 1
            
        counter += 1
    
    # stringify the scores so the results can be compared side to side
    results = str(Alice) + "" + str(Bob)
    return results

# Alice's scores are 5 6 7
a0, a1, a2 = input().strip().split(' ')
a0, a1, a2 = [int(a0), int(a1), int(a2)]

# Bob's scores are 3 6 10
b0, b1, b2 = input().strip().split(' ')
b0, b1, b2 = [int(b0), int(b1), int(b2)]

# Scores should be 1 and 1
result = solve(a0, a1, a2, b0, b1, b2)
print (" ".join(map(str, result)))
