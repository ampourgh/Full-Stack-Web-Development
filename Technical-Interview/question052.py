"""
Sample Input:
5

Sample Output:
1
121
12321
1234321
123454321
"""

n = int('5')

arr = []
palinList = []

for i in range(n):
    i = i + 1
    arr.append(i)
    arr_to_str = ''.join(map(str, arr))
    
    if (i != 1):
        arr2 = arr_to_str[::-1]
        arr2 = arr2[1::]
        inte = int(arr_to_str + arr2)
        palinList.append(inte)
    else:
        inte = int(arr_to_str)
        palinList.append(inte)
        
palinStr = '\n'.join(map(str, palinList))
print(palinStr)

# Second attempt

k = ''
j = ''
arr = []
for i in range(int('5')):
    if i == 0:
        i += 1
        k += str(i)
        j += str(i)
        arr.append(int(k))
    else:
        if i != 1:
            j += str(i)
        i += 1
        k += str(i)
        m = j[::-1]
        l = k + m
        arr.append(int(l))

for a in arr:
    print(a)

# Mathematical approach

for i in range(1,int('5')+1):
    print(((10**i-1)//9)**2)
