"""
Find the unique letters in a string, discard the values that are not alphanumeric.
"""

def uniqueLetterCount(string):

    print(string)
    array = []
    
    for letter in string:
        if not array and letter.isalpha():
            array.append(letter)
        elif letter.isalpha() == False:
            pass
        else:
            if any(item.lower() == letter.lower() for item in array):
                pass

            else:
                array.append(letter)

    print(len(''.join(array)))

hello = 'Hello world.'
elipses = '.......'
goodbye = 'I am going to bed now, goodnight.'

uniqueLetterCount(hello)
uniqueLetterCount(elipses)
uniqueLetterCount(goodbye)
