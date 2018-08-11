"""
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
"""

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    # function takes in 2 pre-created linked-lists
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        
        # empty strings and function used for adding the values together
        l2_value = ""
        l1_value = ""
        
        while l1 != None or l2 != None:
            if l1 != None:
                l1_value += str(l1.val)
                l1 = l1.next
            if l2 != None:
                l2_value += str(l2.val)
                l2 = l2.next
        
        # reverse values, make them integers, and add them together  
        l_sum = int(l1_value[::-1]) + int(l2_value[::-1])
        
        # reverse sum back around and split the integers into separate integers
        l_sum = str(l_sum)[::-1]
        l_sum = [int(x) for x in l_sum]

        return l_sum
