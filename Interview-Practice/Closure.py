"""
Standardize Mobile Number Using Decorators

Output Format:
Print  mobile numbers on separate lines in the required format.

Sample Input:   Sample Output:
07895462130     +91 78954 62130
919875641230    +91 91959 69878
9195969878      +91 98756 41230

Concept:
Like most other programming languages, Python has the concept of closures. 
Extending these closures gives us decorators, which are an invaluable asset. 
You can learn about decorators in 12 easy steps here.
To solve the above question, make a list of the mobile numbers and pass it to a function that sorts the array in ascending order. 
Make a decorator that standardizes the mobile numbers and apply it to the function.
"""

l = ['07895462130', 
     '919875641230', 
     '9195969878']

def wrapper(f):
    def phone(l):
        # f('+91 {} {}'.format(c[-10:-5], c[-5:]) for c in l)
        f('+91 %s %s' % (c[-10:-5], c[-5:]) for c in l) 
    return phone

@wrapper
def sort_phone(l):
  l = sorted(l)
  for ll in l:
    print(''.join(ll))

sort_phone(l)
