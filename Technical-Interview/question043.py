"""
Find the longest word in a setence.
"""

words = "fun&!! time"
words2 = "I love dogs"

def LongestWord(sen):
  word = ""
  prev = ""
  for char in sen:
    if char.isalpha() is True:
      word += char
      
    else:
      if len(word) > len(prev):
        prev = word
        word = ""
  
  if len(word) > len(prev):
    prev = word
  
  return prev

print(LongestWord(words))
print(LongestWord(words2))

str = 'Hi...my name is/ sam'
print sorted(
              map(
                  lambda x: (len(x),x)  , str.split(' ') 
                  ) 
            )[-1][1]
            
            
sentence =  'Hi, my name is Gloria.'

def LongestWord2(sen):
  value  = map(lambda x: x, sentence.split(' '))
         
  for word in value:
    for char in word: 
      if not char.isalnum():
        sen = sen.replace(char, ' ')
  return max(sen.split(), key=len)
  
print(LongestWord2(sentence))
