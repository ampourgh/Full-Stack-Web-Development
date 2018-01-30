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
