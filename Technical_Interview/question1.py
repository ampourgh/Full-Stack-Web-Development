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

    # Put all shared letters between s and t in var below
    new_string_s = ""
    for s_letter in s:
        done = 'not done'
        t_count = 1
        for  t_letter in t:
            if (s_letter.lower() == t_letter.lower() and
               done != 'done'):
                new_string_s += s_letter
                done = 'done'
            elif t_count == len(t):
                return False
            else:
                t_count += 1

    # If s and the new var are the same,
    # then all letters in s are in t
    if new_string_s.lower() == s:
        print 'True'
        return True
    else:
        print new_string_s.lower()
        return False

# check if each letter in the first string
# is the same as the letters in the second string
question1('ad', 'udacity')
question1('pdf', 'portable document format')
question1('gif', 'Graphics Interchange Format i')
