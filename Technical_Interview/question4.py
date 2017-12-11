"""
Question 4
Find the least common ancestor between two nodes on a binary search tree. The least common ancestor is the farthest node from the root that is an ancestor of both nodes. For example, the root is a common ancestor of all nodes on the tree, but if both nodes are descendents of the root's left child, then that left child might be the lowest common ancestor. You can assume that both nodes are in the tree, and the tree itself adheres to all BST properties. The function definition should look like question4(T, r, n1, n2), where T is the tree represented as a matrix, where the index of the list is equal to the integer stored in that node and a 1 represents a child node, r is a non-negative integer representing the root, and n1 and n2 are non-negative integers representing the two nodes in no particular order. For example, one test case might be

question4([[0, 1, 0, 0, 0],
           [0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0],
           [1, 0, 0, 0, 1],
           [0, 0, 0, 0, 0]],
          3,
          1,
          4)
and the answer would be 3.
"""

class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST(object):
    def __init__(self, root):
        self.root = Node(root)

    def insert(self, new_val):
        self.insert_helper(self.root, new_val)

    def insert_helper(self, current, new_val):
        if current.value < new_val:
            if current.right:
                self.insert_helper(current.right, new_val)
            else:
                current.right = Node(new_val)
        else:
            if current.left:
                self.insert_helper(current.left, new_val)
            else:
                current.left = Node(new_val)

    def search(self, find_val):
        parent_node = None
        return self.search_helper(self.root, find_val, parent_node)

    def search_helper(self, current, find_val, parent_node):
        if current:
            if current.value == find_val and parent_node != None:
                return parent_node
            elif current.value == find_val:
                return current.value
            elif current.value < find_val:
                parent_node = current.value
                return self.search_helper(current.right, find_val, parent_node)
            else:
                parent_node = current.value
                return self.search_helper(current.left, find_val, parent_node)
        return 'Not found.'

def Nodes_Linked(matrix, root_value):
    # Set up tree
    tree = BST(root_value)
    print('\nroot:')
    print(root_value)

    lower = []

    matrix_root_row = matrix[root_value]

    i = 0

    if i == 0:
        j = 0
        n = 0
        print('\nroot child:')
        for connection in matrix_root_row:
            connection = n + int(connection)
            if connection == 1:
                print(j)
                tree.insert(j)
                lower.append(j)
            j += 1

    print('\nlength before:')
    print(len(lower))
    print('\nnon-root node child:')
    while len(lower) != 0:
        print("\n" + str(lower[0]) + "'s node child:")
        node_number = lower[0]
        matrix_breadth = matrix[node_number]
        j = 0
        n = 0
        for connection in matrix_breadth:
            connection = n + int(connection)
            if connection == 1:
                print(j)
                tree.insert(j)
                lower.append(j)
            j += 1
        lower.remove(lower[0])

    print('\nlength after:')
    print(len(lower))

    # Should be found
    print('\nParent node for input:')
    print(tree.search(4))
    print(tree.search(1))
    # Should be 'Not found.'
    print(tree.search(6))

T = [[0, 1, 0, 0, 0],
     [0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0],
     [1, 0, 0, 0, 1],
     [0, 0, 0, 0, 0]]

r = 3

Nodes_Linked(T, r)
