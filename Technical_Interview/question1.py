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
    new_string_s = ""
    for s_letter in s:
        t_count = 1
        for  t_letter in t:
            if s_letter == t_letter:
                new_string_s += s_letter
            elif t_count == len(t):
                return False
            else:
                t_count += 1
                
    if new_string_s == s:
        return True
    else:
        return False

question1('ad', 'udacity')
