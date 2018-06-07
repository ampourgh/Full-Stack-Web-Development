"""
Capitalize the start of a sentence
"""

s = 'hell broke lose. hello world my, name is x. what is your name? ha! ha! ha!'
capit = 0
first = 1
sentenceEnd = ['.', '?', '!']
contraction = ['re', 've', 'll']
contraction2 =  ['s', 't']

for x in s[:].split():
  
  if capit == 1:
    s = s.replace(x, x.capitalize())
    capit = 0

  if first == 1:
    s = s.replace(x, x.capitalize())
    first = 1
  elif any(x[-1:] == eachEnd for eachEnd in sentenceEnd):
    capit = 1
  
  # contraction needs work
  for i in contraction: 
    if i == x[-2:]:
      x = list(x)
      x.insert(-2, "\'")
      x = "".join(str(alpha) for alpha in x)
      print(x)
    
  
  """
  elif (x[-1:] == '.' 
        or x[-1:] == '?' 
        or x[-1:] == '!'):
  """

print(s)
