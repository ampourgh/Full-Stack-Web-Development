"""
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
"""

# take an array and the sum value
def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    
    # delete the values larger than the sum
    sorted_nums = sorted(nums)
    sorted_nums = sorted_nums[::-1] 

    for num in sorted_nums:
        if num >= target:
            nums[nums!=num]

    # do a O(n^2)
    index_val = []
    i = 0
    for num1 in nums:
        j = 0
        for num2 in nums:
        
            # make sure indices are the same 
            if i != j and num1 + num2 == target:
                index_val.append(i)
                index_val.append(j)
                return index_val
            j += 1
        i += 1

array = [3,2,4]
target = 6
print(twoSum(array, target))
