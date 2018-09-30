from sys import exit
from itertools import product

inputArr = [
    '3, 1000',
    '2, 5, 4',
    '3, 7, 8, 9',
    '5, 5, 7, 8, 9, 10'
]

K, M = map(int, inputArr[0].split(', '))

# exit if the int is larger than the parameters
# 1 <= K <= 7
# 1 <= M <= 1000
if (K > 7 or K < 1):
    exit("K is bigger than parameters, the integor needs to be between 1 and 7.")

if (M > 1000 or M < 1):
    exit("M is bigger than parameters, the integor needs to be between 1 and 1,000.")

# print('K: ',K, ' M: ', M)

arrayN = []

# append to arrayN an array of the string items between inputArr's [1:]
for i in range(1, K + 1):
    arrayN.append([int(x) for x in inputArr[i].split(', ')])

# print(arrayN)

# function: sum of square of possible combinations, modulo if greater than 1000
def squaredSums(nums):
    return sum(x**2 for x in nums) % M

# put combinations of ints in own array
possible_combinations = list(product(*arrayN))

# get squared sum of possible combinations through squaredSum()
possible_sums = list(map(squaredSums, possible_combinations))

# print the max value
print("""The sum of the maximum values from each arrays,
         after being squared, is {}.""".format(max(possible_sums)))
