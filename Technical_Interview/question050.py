"""
Capitalize the start of a sentence
"""


s = 'hello world my, name is x. what is your name? ha! ha! ha!'
capit = False
first = True
sentenceEnd = ['.', '?', '!']
for x in s[:].split():
  
  if capit == True:
    s = s.replace(x, x.capitalize())
    capit = False

  if first == True:
    s = s.replace(x, x.capitalize())
    first = False
  """
  elif (x[-1:] == '.' 
        or x[-1:] == '?' 
        or x[-1:] == '!'):
  """
  elif any(x[-1:] == eachEnd for eachEnd in sentenceEnd):
    capit = True

print(s)
