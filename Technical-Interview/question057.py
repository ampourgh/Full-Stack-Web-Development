from sys import exit
from itertools import product

inputArr = [
    '3, 1000',
    '2, 5, 4',
    '3, 7, 8, 9',
    '5, 5, 7, 8, 9, 10'
]

# 1 <= K <= 7
# 1 <= M <= 1000
K, M = map(int, inputArr[0].split(', '))

if (K > 7 or K < 1):
    exit("K is bigger than parameters, the integor needs to be between 1 and 7.")

if (M > 1000 or M < 1):
    exit("M is bigger than parameters, the integor needs to be between 1 and 1,000.")

# print('K: ',K, ' M: ', M)

arrayN = []

for _i_ in range(1, K + 1):
    arrayN.append([int(x) for x in inputArr[_i_].split(', ')])

print(arrayN)

def squaredSums(nums):
    return sum(x*x for x in nums) % M

possible_combinations = list(product(*arrayN))

possible_sums = list(map(squaredSums, possible_combinations))

print(max(possible_sums))
