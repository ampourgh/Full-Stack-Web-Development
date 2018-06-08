n = ['0 ab', '0 ef', '0 ab', '0 ef', '0 ij', '0 to', '1 be','1 or', '2 not', '2 to', '3 be', '4 ij', '4 that', '4 is', '4 the', '5 question', '6 cd', '6 gh', '6 cd', '6 gh']

n1 = '0 ab 0 ef 0 ab 0 ef 0 ij 0 to 1 be 1 or 2 not 2 to 3 be 4 ij 4 that 4 is 4 the 5 question 6 cd 6 gh 6 cd 6 gh'

# n = int(input())

num_dict = {}
maxNum = 0

for i, val in enumerate(n):
    x = n1.strip().split()
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
