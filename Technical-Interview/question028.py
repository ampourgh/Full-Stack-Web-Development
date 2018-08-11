"""
Simple Doubly Linked List
"""

class Node:
  def __init__(self, data=None, prev=None, next=None):
      self.data = data
      self.prev = prev
      self.next = next
  def __repr__(self):
      return repr(self.data)

class DoublyLinkedList:
  def __init__(self):
    self.head = None
    
  def __repr__(self):
      nodes = []
      curr = self.head
      while curr:
          nodes.append(repr(curr))
          curr = curr.next
      return '[' + ', '.join(nodes) + ']'
    
  def setList(self, data):
    if self.head == None:
      self.head = Node(data=data, next=self.head)
    elif self.head == None:
      self.head.next = Node(data=data, prev=self.head)
    else:
      curr = self.head
      while curr.next:
        curr = curr.next
      curr.next = Node(data=data, prev=curr)

dll = DoublyLinkedList()
dll.setList(1)
dll.setList(2)
dll.setList(3)
dll.setList(4)
dll.setList(5)
print(dll)

# OUTPUT:
# >>> [1, 2, 3, 4, 5]
