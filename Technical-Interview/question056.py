inputArr = [
            '3 2',
            '1 5 3',
            '3 1',
            '5 7'
]

m, n = inputArr[0].split(' ')
m, n = int(n), int(m)

# print(n,' ',m)
# 3   2

arr = [int(i) for i in inputArr[1].split(' ') ]
# [1, 5, 3]

happy = 0

# A set is an unordered and unindexed collection, written with curly brackets.

like = set([int(j) for j in inputArr[2].split(' ') ])
# {1, 3}

dislike = set([int(j) for j in inputArr[3].split(' ') ])
# {5, 7}

for i in arr:
  # happy = happy + 1 if i in like else happy - 1
  if i in like: happy += 1
  if i in dislike: happy -= 1


print('{}'.format(happy))
