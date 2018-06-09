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
