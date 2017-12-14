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

import pprint
pp = pprint.PrettyPrinter(indent=2)

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

    def get_edge_list(self):
        """Return a list of triples that looks like this:
        (Edge Value, From Node, To Node)"""
        return [(e.value, e.node_from.value, e.node_to.value)
                for e in self.edges]

    def get_edge_list_names(self):
        """Return a list of triples that looks like this:
        (Edge Value, From Node Name, To Node Name)"""
        return [(edge.value,
                 self.node_names[edge.node_from.value],
                 self.node_names[edge.node_to.value])
                for edge in self.edges]

def question3(G):
    graph = Graph()

    g_array = []

    for key in G:
        #print key
        g_array.append(key)

    graph.set_node_names(g_array)

    #print g_array

    key_counter = 0
    for key in G:

        # for each individual item in key's values
        for t in G[key]:

            array_counter = 0
            for item_in_array in g_array:
                #print t[0]
                #print item_in_array
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

        
           
    print "Edge List:"
    pp.pprint(graph.get_edge_list_names())
    

G = {'A': [('B', 2)],
     'B': [('A', 2), ('C', 5)], 
     'C': [('B', 5)]}

print question3(G)
