"""
Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
"""

import os
import sys

def staircase(n):
    count = n
    for i in range(n):
    
        pound = ''
        space = ''
        count2 = (count - 1)
        
        while count2 != 0:
            space += ' '
            count2 -= 1
        
        count -= 1
        
        for j in range(-1, i):
            pound += '#'
        
        pyr = space + pound
        print(pyr)

staircase(6)
staircase(10)
staircase(0)
