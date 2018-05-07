class node:
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None

class node_action():
  def insertion(self, root, *args):
    for node in args:
      if root.data > node.data:
        if root.left is None:
          root.left = node
        else:
          self.insertion(root.left, node)
      else:
        if root.right is None:
          root.right = node
        else:
          self.insertion(root.right, node)
  
  def search(self, root, word):
      node = root
      depth = 0
      count = 0
      while True:
          print(node.data)
          depth += 1
          if node.data == word:
              return node.data
              break
          elif word < node.data:
              node = node.left
          elif word > node.data:
              node = node.right
  

  def print_binary(self, root, direction, count):
      
    count += 1
    
    if not root:
      return  
      
    print("| %s | %s | %s |" % (root.data, direction, count))
    print("+---+-----+---+")
      
    self.print_binary(root.left, ' / ', count)
    self.print_binary(root.right, ' \ ', count)
    

r00t = node(3)
action = node_action()
action.insertion(r00t, node(5), node(2), node(1), node(4), node(6), node(0))

print("""+---+-----+---+
| BINARY TREE |
+---+-----+---+""")
action.print_binary(r00t, ' o ', 0)

print(action.search(r00t, 5))

BST_len = 1


"""
node3, node5, node2, node1, node4, node6, node7, node0  = node(3), node(5), node(2), node(1), node(4), node(6), None, node(0)

node3.right, node3.left = node5, node2
node5.left, node5.right = node1, node6
node2.right, node2.left = node4, node0
"""
