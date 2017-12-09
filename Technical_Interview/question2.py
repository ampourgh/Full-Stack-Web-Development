"""
Question 2
Given a string a,
find the longest palindromic substring contained in a.
Your function definition should look like question2(a),
and return a string.
"""

def question2(a):
    initial_string = 'hi'
    for first_index, first_a_letter in enumerate(a):
        for second_index, second_a_letter in enumerate(a):
            new_word = a[first_index:1 + second_index:]

            if new_word == new_word[::-1]:
                if len(new_word) > len(initial_string):
                    initial_string = new_word
                    
    print initial_string

                
question2('racecar')
