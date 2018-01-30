# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        l2_value = ""
        l1_value = ""
        
        while l1 != None or l2 != None:
            if l1 != None:
                l1_value += str(l1.val)
                l1 = l1.next
            if l2 != None:
                l2_value += str(l2.val)
                l2 = l2.next
            
        l1_value = int(l1_value[::-1])
        l2_value = int(l2_value[::-1])
        
        print(l1_value)
        print(l2_value)

        l_sum = l1_value + l2_value
        
        l_sum = str(l_sum)[::-1]
        
        l_sum = [int(x) for x in l_sum]

        return l_sum
