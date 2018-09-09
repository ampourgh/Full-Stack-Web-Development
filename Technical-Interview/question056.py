m, n = '3 2'.split(' ')
m, n = int(n), int(m)

print(n,' ',m)

arr = [int(i) for i in '1 5 3'.split(' ') ]

print(arr)

happinessMeter = 0

like = set([int(j) for j in '3 1'.split(' ') ])
dislike = set([int(j) for j in '5 7'.split(' ') ])

for i in arr:
  happinessMeter += 1 if i in like else happinessMeter -= 1

print('{}'.format(happinessMeter))
