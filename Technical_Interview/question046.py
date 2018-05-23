"""
Sample Input:
ABCDEFGHIJKLIMNOQRSTUVWXYZ
4

Sample Output:
ABCD
EFGH
IJKL
IMNO
QRST
UVWX
YZ
"""

# My solution:

def wrap(string, max_width):
    string = list(string)
    while string:
        print(''.join(string[0:max_width]))
        if string is not None:
            string = string [max_width:]
        else:
            break
    return ''

# Higher efficiency solution:
for i in range(0, len(string), max_width):
  print string[i : i + max_width]
