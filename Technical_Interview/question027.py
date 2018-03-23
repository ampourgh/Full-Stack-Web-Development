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
      
  def sortedList(self, data):
    if self.head == None:
      new_head = Node(data=data, next=self.head)
      self.head = new_head      
    else:
      if data < self.head.data:
        self.head = Node(data=data, next=self.head)
      elif self.head.next == None:
        self.head.next = Node(data=data, prev=self.head)
      else:
        curr = self.head
        current = curr.next
        while data > current.data:
          if current.next == None:
            current.next = Node(data=data, prev=current)
          current = current.next
        while current.data != curr.next.data:
          curr = curr.next
        if data < current.data:
          curr.next = Node(data=data, prev=curr, next=curr.next)
  

dll = DoublyLinkedList()

print(dll)

dll.sortedList(42)
dll.sortedList(25)
dll.sortedList(23)
dll.sortedList(50)
dll.sortedList(44)

print(dll)

dll.sortedList(33)
dll.sortedList(62)
dll.sortedList(51)
dll.sortedList(20)
dll.sortedList(27)

print(dll)
