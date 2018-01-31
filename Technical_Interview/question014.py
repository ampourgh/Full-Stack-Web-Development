"""
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
"""

class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):

        nums = []
        
        nums.extend(nums1)
        nums.extend(nums2)
        
        nums = sorted(nums)
        
        while len(nums) != 1:
            if len(nums) == 2:
                val = (float(nums[0]) + float(nums[1]))/2
                del nums[1]
                del nums[0]
                
                nums.append(val)
            if len(nums) > 2:
                del nums[(len(nums) - 1)]
                del nums[0]
                
        return(nums[0])
