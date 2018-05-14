"""
Map and Lambda Function

Output Format:
A list on a single line containing the cubes of the first  fibonacci numbers.

Sample Input:
5

Sample Output:
[0, 1, 1, 8, 27]
"""

input = 20

cube = lambda x: pow(x, 1) # x**1

def fibonacci(n):

  a, b = 0, 1

  lst = []

  for i in range(n):
    lst.append(a) # yield a
    a, b = b, a + b
    
  return lst
    
print(fibonacci(input))

# print(map(cube, list(fibonacci(input))))
