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
        
        current = l1.current 
        current2 = l2.current
        
        l1_value = str(current.data)
        
        while current.next != None:
            current = current.next
            l1_value += str(current.data)

        return l1_value
    
print(addTwoNumbers((2 -> 4 -> 3), (5 -> 6 -> 4)))
