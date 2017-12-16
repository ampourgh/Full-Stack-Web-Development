"""
Question 3
Given an undirected graph G, find the minimum spanning tree within G.
A minimum spanning tree connects all vertices in a graph with the smallest possible total weight of edges.
Your function should take in and return an adjacency list structured like this:

{'A': [('B', 2)],
 'B': [('A', 2), ('C', 5)], 
 'C': [('B', 5)]}
Vertices are represented as unique strings.
The function definition should be question3(G)
""" 

class Node(object):
    def __init__(self, value):
        self.value = value
        self.edges = []
        self.visited = False

class Edge(object):
    def __init__(self, value, node_from, node_to):
        self.value = value
        self.node_from = node_from
        self.node_to = node_to

class Graph(object):
    def __init__(self, nodes=None, edges=None):
        self.nodes = nodes or []
        self.edges = edges or []
        self.node_names = []
        self._node_map = {}

    def set_node_names(self, names):
        """The Nth name in names should correspond to node number N.
        Node numbers are 0 based (starting at 0).
        """
        self.node_names = list(names)

    def insert_node(self, new_node_val):
        "Insert a new node with value new_node_val"
        new_node = Node(new_node_val)
        self.nodes.append(new_node)
        self._node_map[new_node_val] = new_node
        return new_node

    def insert_edge(self, new_edge_val, node_from_val, node_to_val):
        "Insert a new edge, creating new nodes if necessary"
        nodes = {node_from_val: None, node_to_val: None}
        for node in self.nodes:
            if node.value in nodes:
                nodes[node.value] = node
                if all(nodes.values()):
                    break
        for node_val in nodes:
            nodes[node_val] = nodes[node_val] or self.insert_node(node_val)
        node_from = nodes[node_from_val]
        node_to = nodes[node_to_val]
        new_edge = Edge(new_edge_val, node_from, node_to)
        node_from.edges.append(new_edge)
        node_to.edges.append(new_edge)
        self.edges.append(new_edge)

    def kruskal(self, edge_values):

        # Create the dictionary for new adjacency list
        adjacency_list = {}

        # If the edge was printed, adj will be used to compare to the following one
        previous_edges = []
        counter = -1

        # Goes through each sorted unique edge
        for unique_edges in edge_values:
            counter += 1

            # If the edge matches the smallest edge in the list
            # and 
            for edge in self.edges:

                if edge.value == edge_values[counter]:
                    from_value, to_value = edge.node_from.value, edge.node_to.value

                    if any(connection == [self.node_names[to_value], self.node_names[from_value]] for connection in previous_edges):
                        continue
                    else:
                        adjacency_list[self.node_names[from_value]] = []
                
                        adjacency_list[self.node_names[from_value]].append((self.node_names[to_value], edge.value))

                        append_edge = [self.node_names[from_value], self.node_names[to_value]]
                        previous_edges.append(append_edge)
             
        # after all the edges are inserted into the dictionary, print
        print adjacency_list      

            
def question3(G):
    # Initializing graph class and putting it in a variable
    graph = Graph()

    # Setting the nodes for each point
    g_array = []

    unique_edge_list = []

    for key in G:
        g_array.append(key)

    graph.set_node_names(g_array)


    # Setting the edge values 
    key_counter = 0
    for key in G:

        for t in G[key]:

            array_counter = 0
            for item_in_array in g_array:

                if t[0] == item_in_array:
                    key2_counter = array_counter
                    
                array_counter += 1

            # Graph insert edge (edge value, point 1, point 2)
            graph.insert_edge(t[1], key_counter, key2_counter)

            # Find the unique edges 
            if len(unique_edge_list) == 0:
                unique_edge_list.append(t[1])
            if any(unique_edges != t[1] for unique_edges in unique_edge_list):
                if t[1] < unique_edge_list[0]:
                    unique_edge_list.insert(0, t[1])
                elif t[1] > unique_edge_list[-1]:
                    unique_edge_list.append(t[1])
                
            
        key_counter += 1

    # Sort unique edges before sending them off to function
    unique_edge_list = sorted(unique_edge_list)

    # Run graph content through Kruskal
    print "\nKruskal:"
    graph.kruskal(unique_edge_list)

# Initial adjacency list
G = {'A': [('B', 2)],
     'B': [('A', 2), ('C', 5)], 
     'C': [('B', 5)]}

R = {'A': [('B', 2)],
     'B': [('C', 5), ('A', 2)], 
     'C': [('B', 5)],
     'D': [('A', 2), ('B', 2), ('C', 2)],
     'E': [('A', 5), ('D', 2)]}

print "\nInitial adjacency list:"
print G

# Inputting the list in question3 function
question3(G)
question3(R)
