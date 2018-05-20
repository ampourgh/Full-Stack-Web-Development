loop = ['add hack', 'add hackerrank', 'find hac', 'find hak']

m = {}

class ContactList():
    def add_word(self, word):
        for i in range(1, len(word)+1):
            if word[:i] in m:
                m[word[:i]] += 1
            else:
                m[word[:i]] = 1

    def find_partial(self, word):
        return m.get(word) or 0

toContactsList = ContactList()
for i in range(loop):
    input = loop[i].split()
    if input[0] == "add":
        toContactsList.add_word(input[1])
    else:
        print(toContactsList.find_partial(input[1]))
