"""
Question 2
Given a string a,
find the longest palindromic substring contained in a.
Your function definition should look like question2(a),
and return a string.
"""

def question2(a):

    # The initial increment
    i = 1

    # Creating the variable that will store the longest palindrom
    initial_string = 'hi'
        
    # Continues looping until false
    while True:
        
        # i goes through each letter where
        # j is a letter below, k a letter above
        # and l being where i is
        done = 'not done'
        j = i - 1
        k = i + 2
        l = 0
        
        # The conditions prevent the increments to go out of range
        while (j != -1 or
                k != len(a) or
                l != len(a) or
                done != 'done'):

            # Creating strings from snippets of the original word
            string_value = a[j:k].lower()
            string_value2 = a[j:l].lower()
            string_value3 = a[j:i + 1].lower()

            # This condition assumes there is a singular letter in the middle
            if string_value == string_value[::-1]:
                if len(string_value) > len(initial_string):
                    initial_string = a[j:k]
                j -= 1
                k += 1

            # The following conditions treat as though there's 2 letters
            # that are the same in the middle
            elif string_value2== string_value2[::-1]:
                if len(string_value2) > len(initial_string):
                    initial_string = a[j:i]
                j -= 1
                l += 1
                
            elif string_value3 == string_value3[::-1]:
                if len(string_value3) > len(initial_string):
                    initial_string = a[j:i]
                j -= 1
                l = i + 2

            # Once found, print result and return false to get out of the loop
            elif i == len(a):
                print '\nResult:'
                print initial_string
                return False

            # Else revert k and j to being a character above and below i
            # and i moving up to the next letter
            else:
                done = 'done'
                i += 1
                k = i + 2
                j = i - 1 
    
# Try the string 'racecara',
# which should return all the letters besides the last a
# 'Taccat' is an exmaple of a word with 2 matching letters in the center
question2('racecarat')
question2('a Taccat')
question2('How are you, mom?')
