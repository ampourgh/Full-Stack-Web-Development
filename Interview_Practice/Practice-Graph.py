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
    
  def connection(self, start, end):
    for val in self.edge_val:
      if not val[1]:
        pass
      else:
        if start is val[0] or start is val[1]:
          if start is val[1] and end is val[0]:
            print('Found!')
          if start is val[0] and end is val[1]:
            print('Found!')
          
graph = {'A': set(['B', 'C', 'F']),
         'B': set(['A', 'D', 'E']),
         'C': set(['A', 'F']),
         'D': set(['B']),
         'E': set(['B', 'F']),
         'F': set(['C', 'E']),
         'G': set([])}
          
graphed = edges()
graphed.insertion(graph)

graphed.connection('A', 'C')
