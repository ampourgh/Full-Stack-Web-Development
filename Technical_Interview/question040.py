"""
Is This a Binary Search Tree?

For the purposes of this challenge, 
we define a binary tree to be a binary search tree with the following ordering requirements:

Given the root node of a binary tree, 
can you determine if it's also a binary search tree?

Complete the function in your editor below, 
which has  parameter: a pointer to the root of a binary tree. 
It must return a boolean denoting whether or not the binary tree is a binary search tree. 
You may have to write one or more helper functions to complete this challenge.

Input Format

You are not responsible for reading any input from stdin. 
Hidden code stubs will assemble a binary tree and pass its root node to your function as an argument.
"""

class node:
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None

def check_binary_search_tree_(node):
    return checkBST(node, -1, 10001)

def checkBST(node, Min, Max):
    if not node:
        return True
    if node.data <= Min or node.data >= Max:
        return False
    if Min < node.data < Max:
         return checkBST(node.left, Min, node.data) and checkBST(node.right, node.data, Max)


node3, node5, node2, node1, node4, node6, node7  = node(3), node(5), node(2), node(1), node(4), node(6), None

node3.left, node3.right = node5, node2
node5.left, node5.right = node1, node4
node2.left = node6
node1.left, node1.right = None, None
node4.left, node4.right = None, None

print(check_binary_search_tree_(node7))
print(check_binary_search_tree_(node3))
print(check_binary_search_tree_(node2))
print(check_binary_search_tree_(node5))
print(check_binary_search_tree_(node1))
print(check_binary_search_tree_(node4))
print(check_binary_search_tree_(node6))
