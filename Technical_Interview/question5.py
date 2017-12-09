"""
Question 5
Find the element in a singly linked list that's m elements from the end.
For example, if a linked list has 5 elements, the 3rd element from the end is the 3rd element.
The function definition should look like question5(ll, m),
where ll is the first node of a linked list and m is the "mth number from the end".
You should copy/paste the Node class below to use as a representation of a node in the linked list.
Return the value of the node at that position.
"""

class Node(object):
  def __init__(self, data):
    self.data = data
    self.next = None

def get_full_length():
    counter = 1
    current = Node1

    if current == None:
        print 'No nodes in the linked list.'
    elif current.next == None:
        return counter
    else:
        current = current.next
        counter += 1

        while current.next != None:
            current = current.next
            counter += 1
            
            if current.next == None:
                return counter

def get_m_position(m):
    if m > 0 and type(m) == int:
        length = get_full_length()
        m_location = length - (m - 1)
        current = Node1
        counter = 1
        while current.next != None:
            if counter == m_location:
                return current.data
            else:
                current = current.next
                counter += 1
    
    else:
        print 'm needs to be an integer.'
        return False

def question5(ll, m):

    m_result = get_m_position(m)
    
    if ll != Node1:
        print str(ll.data) + ' is not the first node.'
    
    elif m_result == False:
        ll = Node1.data
        print str(ll) + ' is the first node in the linked list.'

    else: 
        ll = Node1.data
        print (str(ll) + ' is the first node in the linked list and ' +
              str(m_result) + ' is the element ' + str(m) +
              ' elements away from the end of the list.')
    
Node1 = Node(1)
Node2 = Node(2)
Node3 = Node(3)
Node4 = Node(4)
Node5 = Node(5)
Node6 = Node(6)
Node7 = Node(7)
Node6.next = Node7
Node5.next = Node6
Node4.next = Node5
Node3.next = Node4
Node2.next = Node3
Node1.next = Node2


question5(Node1, 6)
