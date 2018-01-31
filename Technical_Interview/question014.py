class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        nums = []
        
        nums.extend(nums1)
        nums.extend(nums2)
        
        nums = sorted(nums)
        
        while len(nums) != 1:
            if len(nums) == 2:
                val = (nums[0] + nums[1])/2
                del nums[1]
                del nums[0]
                
                nums.append(val)
            if len(nums) > 2:
                del nums[(len(nums) - 1)]
                del nums[0]
                
        return(nums[0])
