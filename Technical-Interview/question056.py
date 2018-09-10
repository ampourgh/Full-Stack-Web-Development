inputArr = [
            '3 2',
            '1 5 3',
            '3 1',
            '5 7'
]

m, n = inputArr[0].split(' ')
m, n = int(n), int(m)

print(n,' ',m)

arr = [int(i) for i in inputArr[1].split(' ') ]

print(arr)

happy = 0

like = set([int(j) for j in inputArr[2].split(' ') ])
dislike = set([int(j) for j in inputArr[3].split(' ') ])

for i in arr:
  happy = happy + 1 if i in like else happy - 1

print('{}'.format(happy))
