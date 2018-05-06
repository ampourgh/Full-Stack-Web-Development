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

def search_binary(root, value):
  if not root:
    return

  
  if root.data == value:
    print('Found %s' % (value))
    
  
  if root.left:
    search_binary(root.left, value)
  if root.right:
    search_binary(root.right, value)
  
  count_binary(root)
  if BST_len == BST_counter:
    print('%s has not been found within this tree' % (value))
  

def count_binary(*arg):
  
  BST_len += 1 
  
  print_binary(r00t.left)
  print_binary(r00t.right)
  
  

def print_binary(root, direction, count):
    
  count += 1
  
  if not root:
    return  
    
  print("| %s | %s | %s |" % (root.data, direction, count))
  print("+---+-----+---+")
    
  print_binary(root.left, ' / ', count)
  print_binary(root.right, ' \ ', count)
    

r00t = node(3)
insertion(r00t, node(5), node(2), node(1), node(4), node(6), node(0))

print("""+---+-----+---+
| BINARY TREE |
+---+-----+---+""")
print_binary(r00t, ' o ', 0)

search_binary(r00t, 5)

BST_len = 1
count_binary(r00t, BST_len)


"""
node3, node5, node2, node1, node4, node6, node7, node0  = node(3), node(5), node(2), node(1), node(4), node(6), None, node(0)

node3.right, node3.left = node5, node2
node5.left, node5.right = node1, node6
node2.right, node2.left = node4, node0
"""
