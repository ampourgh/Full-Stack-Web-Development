# array of strings
inputArr = [
  '3, 2',
  '1, 5, 3',
  '3, 1',
  '5, 7'
]

# alternative; strings turned into array for simplicity
inputArr2 = [
  [3, 2],
  [1, 5, 3],
  [3, 1],
  [5, 7]
]

m, n = inputArr[0].split(', ')
m, n = int(n), int(m)

# index 0 is between 0:1 and index 1 is between 1:2
m, n = inputArr2[0][0:1], inputArr2[0][1:]

print(n,' ',m)
# 3   2

arr = [int(i) for i in inputArr[1].split(', ') ]
arr = inputArr2[1]
print(arr)
# [1, 5, 3]

happy = 0

# A set is an unordered and unindexed collection, written with curly brackets.
# each string is turned into an int, and placed in the set

like = set([int(j) for j in inputArr[2].split(', ') ])
like = inputArr2[2]
print(like)
# {1, 3}

dislike = set([int(j) for j in inputArr[3].split(', ') ])
dislike = inputArr2[3]
print(dislike)
# {5, 7}

for i in arr:
  # Simplified if/else conditional statement that only has 2 conditions
  # happy = happy + 1 if i in like else happy - 1
  if i in like: happy += 1
  if i in dislike: happy -= 1

print('Happy index is at {}.'.format(happy))
