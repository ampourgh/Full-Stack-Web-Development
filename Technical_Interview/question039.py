"""
We add a Leap Day on February 29, almost every four years. The leap day is an extra, or intercalary day and we add it to the shortest month of the year, February. 
In the Gregorian calendar three criteria must be taken into account to identify leap years:

The year can be evenly divided by 4, is a leap year, unless:
The year can be evenly divided by 100, it is NOT a leap year, unless:
The year is also evenly divisible by 400. Then it is a leap year.
"""

# refactored method with 2-way conditional statement
def is_leap(year):
    if year % 4 is 0 and year % 100 is not 0 or year % 400 is 0:
        leap = True
    else:
        leap = False
        
# Suggested method without explicit boolean operators
def is_leap2(year):
    return year % 4 == 0 and year % 100 != 0 or year % 400 == 0
        
