class edges:
  def __init__(self):
    self.edge_val = []

  def insertion(self, graphing):
    
    for node in graphing:
      if graphing[node] is None or not graphing[node]:
        self.edge_val.append(node)
      else:
        for neighbor in graphing[node]:
          self.edge_val.append((node, neighbor))
    
    print(self.edge_val)
    """ Prints >>>
    [('A', 'F'), ('A', 'B'), ('A', 'C'), ('B', 'E'), 
     ('B', 'D'), ('B', 'A'), ('C', 'A'), ('C', 'F'), 
     ('D', 'B'), ('E', 'F'), ('E', 'B'), ('F', 'E'), 
      ('F', 'C'), 'G']
    """
  
  def listed(self):
    edge_dic = dict()
    for key, val in enumerate(self.edge_val):
      edge_dic[val[0]] = val[0]
    edge_arr = []
    for key, val in edge_dic.items():
      edge_arr.append(key)
      
    return edge_arr
    
  def connection(self, start, end, counter):
    if counter is 0:
      print('\nStarting search for connection between vertices %s and %s' % (start, end))
      counter += 1
    
    array_list = self.listed()
    
    if start not in array_list or end not in array_list:
      if start not in array_list and end in array_list: 
        print('%s is not a vertice.' % (start))
      elif end not in array_list and start in array_list:
        print('%s is not a vertice.' % (end))
      else:
        print('%s and %s are both is not a vertice.' % (start, end))
        
    for val in self.edge_val:
      if len(val) < 2:
        pass
      else:
        if start is val[0] or start is val[1]:
          if start is val[1] and end is val[0]:
            print('Found connection between %s and %s' % (val[0], val[1]))
          if start is val[0] and end is val[1]:
            print('Found connection between %s and %s' % (val[0], val[1]))
  
  def isolation(self):
    isolated_edges = []
    for node in self.edge_val:
      node = ' '.join(node)
      if len(node) == 1:
        isolated_edges.append(node)
    
    print('The isolated edges are/is ')
    counter = 0
    for iso_edge in isolated_edges:
      counter += 1 
      if len(isolated_edges) > 1 and counter == len(isolated_edges):
        print('and %s.' % (iso_edge))
      elif len(isolated_edges) > 1:  
        print(iso_edge)
      else:
        print('%s.' % iso_edge)
        
        
          
graph = {'A': set(['B', 'C', 'F']),
         'B': set(['A', 'D', 'E']),
         'C': set(['A', 'F']),
         'D': set(['B']),
         'E': set(['B', 'F']),
         'F': set(['C', 'E']),
         'G': set([])}
          
graphed = edges()
graphed.insertion(graph)

graphed.connection('A', 'C', 0)
graphed.connection('X', 'Y', 0)

graphed.insertion({'H': set(['A', 'E', 'F'])})

print('\nUnique Edges:', graphed.listed())

graphed.isolation()
