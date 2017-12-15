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

    def kruskal(self):

        # Get sorted list of unique edge values
        edge_values = []
        
        for edge in self.edges:
            edge_values.append(edge.value)
        
        edge_values = sorted(edge_values)

        for num, ind in enumerate(edge_values):
            counter = 1
            while counter + 1 < len(edge_values):
                if ind == edge_values[counter]:
                    edge_values.remove(edge_values[counter])
                counter += 1

        # Create the dictionary for new adjacency list
        adjacency_list = {}

        # If the edge was printed, adj will be used to compare to the following one
        previous_edge = []
        counter = -1

        # Goes through each sorted unique edge
        for unique_edges in edge_values:
            counter += 1

            # If the edge matches the smallest edge in the list
            # and 
            for edge in self.edges:
                from_value, to_value = edge.node_from.value, edge.node_to.value

                if edge.value == edge_values[counter]:

                    if len(previous_edge) == 0:
                        adjacency_list[self.node_names[from_value]] = []
                
                        adjacency_list[self.node_names[from_value]].append((self.node_names[to_value], edge.value))

                        append_edge = [self.node_names[from_value], self.node_names[to_value]]
                        previous_edge.append(append_edge)
                        
                    else:
                        last_edge = []
                        for connection in previous_edge:        
                            if (connection[0] != self.node_names[to_value] and
                                connection[1] != self.node_names[from_value] and
                                previous_edge != last_edge):
                
                                adjacency_list[self.node_names[from_value]] = []
                
                                adjacency_list[self.node_names[from_value]].append((self.node_names[to_value], edge.value))

                                append_edge = [self.node_names[from_value], self.node_names[to_value]]
                                previous_edge.append(append_edge)
                                last_edge = previous_edge
             

        # after all the edges are inserted into the dictionary, print
        print adjacency_list      

            
def question3(G):
    # Initializing graph class and putting it in a variable
    graph = Graph()

    # Setting the nodes for each point
    g_array = []

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

            # graph insert edge (edge value, point 1, point 2)
            print "\n(edge value, point 1, point 2)"
            print t[1]
            print key_counter
            print key2_counter 
            graph.insert_edge(t[1], key_counter, key2_counter)
            
        key_counter += 1
        
    # Run graph content through Kruskal
    print "\nKruskal:"
    graph.kruskal()

# Initial adjacency list
G = {'A': [('B', 2)],
     'B': [('A', 2), ('C', 5)], 
     'C': [('B', 5)]}
print "\nInitial ajacency list:"
print G

# Inputting the list in question3 function
question3(G)
