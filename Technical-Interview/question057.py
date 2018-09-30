inputArr = [
  '3, 1000',
  '2, 5, 4',
  '3, 7, 8, 9',
  '5, 5, 7, 8, 9, 10'
]

K, M = map(int, inputArr[0].split(', '))

print(K)
print(M)

arrayN = []

for _i_ in range(K + 1):
  if _i_ != 0:
    arrayN.append([int(x) for x in inputArr[_i_].split(', ')])

print(arrayN)

from itertools import product
possible_combination = list(product(*arrayN))

def func(nums):
    return sum(x*x for x in nums) % M

print(max(list(map(func, possible_combination))))
