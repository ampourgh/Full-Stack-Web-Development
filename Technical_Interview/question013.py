# look for any unique value in a string
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        unique_letters = []
        
        s = list(s)
        
        for alpha in s:
            if any(alpha == letter for letter in unique_letters):
                pass
            else:
                unique_letters.append(alpha)
        
        return len(unique_letters)
    
# look for sequence of unique values in a string
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        unique_letters = []
        unique_l = []
        previous_longest = []
        
        s = list(s)
        
        for alpha in s:
            
            if len(unique_letters) == 0:
                print('new alpha')
                print(alpha)
                unique_letters.append(alpha)
                unique_l.append(alpha)
            else:
                count = 0
                if unique_letters != unique_l:
                    unique_letters = unique_l
                for letter in unique_letters:
                    print('unique_letters:')
                    print(unique_l)
                    print(unique_letters)
                    
                    count += 1
                    if alpha == letter:
                        print('same')
                        print(alpha)
                        print(letter)
                        if len(unique_l) > len(previous_longest):
                            previous_longest = unique_l
                        unique_l = []
                        unique_letters = []
                        unique_letters.append(alpha)
                        unique_l.append(alpha)
                    elif count == len(unique_letters) and alpha != letter:
                        print('unique')
                        print(alpha)
                        unique_l.append(alpha)
        
        return len(previous_longest)
