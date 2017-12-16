"""
Question 4
Find the least common ancestor between two nodes on a binary search tree.
The least common ancestor is the farthest node from the root that is an ancestor of both nodes.
For example,
the root is a common ancestor of all nodes on the tree,
but if both nodes are descendents of the root's left child,
then that left child might be the lowest common ancestor.
You can assume that both nodes are in the tree,
and the tree itself adheres to all BST properties.
The function definition should look like question4(T, r, n1, n2),
where T is the tree represented as a matrix,
where the index of the list is equal to the integer stored in that node and a 1 represents a child node,
r is a non-negative integer representing the root,
and n1 and n2 are non-negative integers representing the two nodes in no particular order.
For example, one test case might be
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

# The node tree class
class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST(object):
    def __init__(self, root):
        self.root = Node(root)

    # Insert funnctiion which takes everything from matrix
    # and inserts it into the tree
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

    # The following search will take in the nodes
    # and perform BST search for the nodes,
    # then return the lowest common ancestor between the nodes
    def search(self, node1, node2):
        node1_found = None
        node1_ancestry = []
        node2_ancestry = []
        return self.search_helper(self.root, node1, node2, node1_found, node1_ancestry, node2_ancestry)

    def search_helper(self, current, node1, node2, node1_found, node1_ancestry, node2_ancestry):

        if current:

            #  If the current value is node1 or node1 was already found
            #  proceed to do a BST for node 2 
            if current.value == node1 or node1 == node1_found:
                if current.value == node1:
                    node1_ancestry.append(current.value)
                    node1_found = node1_ancestry[-1]
                    current = self.root

                # If node2 is found,
                # find the lowest common ancestry 
                if current.value == node2:
                    counter = 0
                    for i in node1_ancestry:
                        if len(node1_ancestry) == counter or len(node2_ancestry) == counter:
                            return node2_ancestry[counter - 1]
                        elif node1_ancestry[counter] != node2_ancestry[counter]:
                            return node2_ancestry[counter - 1]
                        else:
                            counter += 1

                # Node2 BST
                elif current.value < n2:
                    node2_ancestry.append(current.value)
                    return self.search_helper(current.right, node1, node2, node1_found, node1_ancestry, node2_ancestry)
                else:
                    node2_ancestry.append(current.value)
                    return self.search_helper(current.left, node1, node2, node1_found, node1_ancestry, node2_ancestry)

            # Node1 BST
            elif current.value < n1:
                node1_found = current.value
                node1_ancestry.append(current.value)
                return self.search_helper(current.right, node1, node2, node1_found, node1_ancestry, node2_ancestry)
            else:
                node1_found = current.value
                node1_ancestry.append(current.value)
                return self.search_helper(current.left, node1, node2, node1_found, node1_ancestry, node2_ancestry)

        return 'Not found.'

def Nodes_Linked(matrix, root_value, node1, node2):
    # Set up tree
    tree = BST(root_value)
    print('\nroot:')
    print(root_value)

    lower = []

    # Append root to tree
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

    # inert the non-root childs into the tree
    # includes the childs of child
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


    # Should be found
    print('\nParent node for input of two nodes:')
    print(tree.search(node1, node2))

# Nodes connected to one another
T = [[0, 1, 0, 0, 0], # Node 0
     [0, 0, 0, 0, 0], # 1
     [0, 0, 0, 0, 0], # 2
     [1, 0, 0, 0, 1], # 3
     [0, 0, 0, 0, 0]] # 4

# Root node
r = 3

# Searching for lowest common ancestor of these nodes
n1 = 1
n2 = 4

Nodes_Linked(T, r, n1, n2)
