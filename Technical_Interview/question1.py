"""
Question 1
Given two strings s and t,
determine whether some anagram of t is a substring of s.
For example: if s = "udacity" and t = "ad",
then the function returns True.
Your function definition should look like:
question1(s, t) and return a boolean True or False.
"""

def question1(s, t):

    # First sort the letters in the words,
    # and join them to a string to so that they're not arrays
    t = ''.join(sorted(t.lower()))
    s = ''.join(sorted(s.lower()))

    # This string will be compared to the original string t
    new_string_t = ""

    # Incrementation for string s
    t_s = 0
    i_s = 0

    # loop through the letters
    for t_letter in t:

        # To prevent duplicate letters 
        done = 'not done'
        
        for s_letter in s:

            # Compare the numerical values of the letters
            if ord(t[t_s]) > ord(s[i_s]):
                s = s[1:]

            # If words are comparable and this isn't a duplicate letter in s
            elif (t[t_s] == s[i_s] and
                  done != 'done'):
                new_string_t += t_letter
                i_s += 1
                t_s += 1
                done = 'done'

                # If at the end of the length
                if t_s == len(t):

                    # If s and the new var are the same,
                    # then all letters in s are in t
                    if new_string_t == str(t):
                        print 'True'
                        return True
                    else:
                        print new_string_t
                        print t
                        return False

# check if each letter in the first string
# is the same as the letters in the second string
question1('udacity', 'ad')
question1('portable document format', 'pdf')
question1('Graphics Interchange Format', 'gif')
