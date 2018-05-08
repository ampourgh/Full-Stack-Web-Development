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
    
  def connection(self, start, end, counter):
    if counter is 0:
      print('Starting search for connection between vertices %s and %s' % (start, end))
      counter += 1
      
    for val in self.edge_val:
      if len(val) < 2:
        pass
      else:
        if start is val[0] or start is val[1]:
          if start is val[1] and end is val[0]:
            print('Found connection between %s and %s' % (val[0], val[1]))
          if start is val[0] and end is val[1]:
            print('Found connection between %s and %s' % (val[0], val[1]))
          
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
