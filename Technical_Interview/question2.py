"""
Question 2
Given a string a,
find the longest palindromic substring contained in a.
Your function definition should look like question2(a),
and return a string.
"""

def question2(a):
    # Initial placeholder string
    initial_string = 'hi'

    # Get the value and index of string 
    for first_index, first_a_letter in enumerate(a):
        for second_index, second_a_letter in enumerate(a):
            
            # Get a range of letters within the string
            new_word = a[first_index:1 + second_index:]

            # If range of letters are the same forward and backwards
            # Change the initial string
            if new_word.lower() == new_word[::-1].lower():
                if len(new_word) > len(initial_string):
                    initial_string = new_word
                    
    print initial_string

# Try the string 'racecara',
# which should return all the letters besides the last a
question2('racecara')
question2('a Tacocat')
question2('How are you, mom?')
