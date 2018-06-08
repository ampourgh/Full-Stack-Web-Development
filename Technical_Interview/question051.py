n2 = ['0 ab', '0 ef', '0 ab', '0 ef', '0 ij', '0 to', '1 be','1 or', '2 not', '2 to', '3 be', '4 ij', '4 that', '4 is', '4 the', '5 question', '6 cd', '6 gh', '6 cd', '6 gh']

n3 = [
        ['6', 'cd'],
        ['0', 'ef'],
        ['6', 'gh'],
        ['4', 'ij'],
        ['0', 'ab'],
        ['6', 'cd'],
        ['0', 'ef'],
        ['6', 'gh'],
        ['0', 'ij'],
        ['4', 'that'],
        ['3', 'be'],
        ['0', 'to'],
        ['1', 'be'],
        ['5', 'question'],
        ['1', 'or'],
        ['2', 'not'],
        ['4', 'is'],
        ['2', 'to'],
        ['4', 'the']
      ]

n1 = '0 ab 0 ef 0 ab 0 ef 0 ij 0 to 1 be 1 or 2 not 2 to 3 be 4 ij 4 that 4 is 4 the 5 question 6 cd 6 gh 6 cd 6 gh'

def getKey(item):
  return item[0]

n = sorted(n3, key = getKey)

num_dict = {}
maxNum = 0

for i, val in enumerate(n):
    x = n3[i]
    numX = int(x[0])
    linX = x[1]
    
    if i < len(n)/2:
        linX = "-"
      
    if numX > maxNum:
        maxNum = numX
        
    if numX in num_dict:
        num_dict[numX].append(linX)
    else:
        num_dict[numX] = [linX]
        
output = []

for i in range(maxNum + 1):
    if i in num_dict:
        for line in num_dict[i]:
            output.append(line)

print(" ".join(map(str,output)))
