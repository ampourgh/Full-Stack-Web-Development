"""
Sample Input:
aabbbccde

Sample Output:
b 3
a 2
c 2
"""

from collections import Counter, OrderedDict
from fileinput import input

class OrderedCounter(Counter, OrderedDict):
    def __init__(self, items):
        super(OrderedCounter, self).__init__(sorted(items))

    def main(self, string):
        for letter, count in OrderedCounter(string).most_common(3):
            print(letter, count)


if __name__ == '__main__':
    OrderedCounter.main('aabbbccde')
