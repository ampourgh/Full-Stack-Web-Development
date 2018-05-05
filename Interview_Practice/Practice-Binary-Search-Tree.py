class node:
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None

def insertion(root, *args):
  for node in args:
    if root.data > node.data:
      if root.left is None:
        root.left = node
      else:
        insertion(root.left, node)
    else:
      if root.right is None:
        root.right = node
      else:
        insertion(root.right, node)

def print_binary(root):
    if not root:
        return        
    print(root.data)
    print_binary(root.left)
    print_binary(root.right)   
    
  
"""
node3, node5, node2, node1, node4, node6, node7, node0  = node(3), node(5), node(2), node(1), node(4), node(6), None, node(0)

node3.right, node3.left = node5, node2
node5.left, node5.right = node1, node6
node2.right, node2.left = node4, node0
"""

r00t = node(3)
insertion(r00t, node(5), node(2), node(1), node(4), node(6), node(0))
print_binary(r00t)
