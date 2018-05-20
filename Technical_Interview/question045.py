"""
Output Format:
For each find partial operation, print the number of contact names starting with  on a new line.

Sample Input:
4
add hack
add hackerrank
find hac
find hak

Sample Output:
2
0
"""

loop = ['add amp', 
        'add AmPourgh', 
        'add Amir', 
        'find am', 
        'find midi']

m = {}

class ContactList():
    def add_word(self, word):
        for i in range(1, len(word)+1):

            if word[:i] in m:
                m[word[:i]] += 1
            else:
                m[word[:i]] = 1

    def find_partial(self, word):
      # Compare to the words in the dictionary
      # or return False
      return m.get(word) or 0

toContactsList = ContactList()
for i in range(len(loop)):

    input_val = loop[i].split(" ")
   
    if input_val[0] == "add":
        toContactsList.add_word(input_val[1].lower())
    elif input_val[0] == "find":
        print(toContactsList.find_partial(input_val[1].lower()))

# am is archived 3 times, midi is has not been archived

print(m)
# >>> {'a': 3, 'ami': 1, 'ampo': 1, 'am': 3, 'ampourg': 1, 'ampou': 1, 'ampour': 1, 'amp': 2, 'amir': 1, 'ampourgh': 1}
