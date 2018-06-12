"""
Sample Input 0:
5
47
Sample Output 0:
thirteen minutes to six

Sample Input 1:
3
00
Sample Output 1:
three o' clock

Sample Input 2:
7
15
Sample Output 2:
quarter past seven
"""

#!/bin/python3

numWord = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', \
           6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', \
           11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', \
           15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', \
           19: 'Nineteen', 20: 'Twenty', 30: 'Thirty', 40: 'Forty', \
           50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty', \
           90: 'Ninety', 0: 'Zero'}

def timeInWords(h, m):
    if (m > 30): 
        h1, m1 = h + 1, 60 - m
        print("%s minutes to %s" 
              % (numWord[m1].lower(), numWord[h1].lower()))
    elif (int(m) == 0):
        print("%s o' clock" 
              % (numWord[h].lower()))
    else: 
        if (int(m) % 15 == 0):
            print("quarter past %s" 
                  % (numWord[h].lower()))
        else: 
            s = int(m) > 1 and 's' or ''
            print("%s minute%s past %s" 
                  % (numWord[m].lower(), s, numWord[h].lower()))     
        
if __name__ == '__main__':
    h = int(input())
    m = int(input())
    timeInWords(h, m)

# Alternative solution

minute = [0,'one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve',
       'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','ninteen','twenty']
quarter = ["%s o' clock", "quarter past %s", "half past %s", "quarter to %s"]

appendMinutes()

h, m = int('6'), int('00')

hour = minute[h] if (m<31) else minute[h+1]

if not m%15:
    print(quarter[m//15] % hour)
elif m<30:
    print("%s minute"
          % minute[m]+"s"*(m==1)+ " past %s"%hour)
else:
    print("%s minute"
          % minute[60-m]+"s"*(m==59)+ " to %s"%hour)

def appendMinutes():
  for i in range(1, 10):
      minute.append('twenty %s' % minute[i])

  for i in range(1, 10):
      minute.append('thirty %s' % minute[i])

  for i in range(1, 10):
      minute.append('forty %s' % minute[i])

  for i in range(1, 10):
      minute.append('fifty %s' % minute[i])
