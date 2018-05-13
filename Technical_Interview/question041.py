"""
Validating Email Addresses With a Filter
"""

def validate(emails):
    try:
      username, url = email.split("@")
      website = url[0 : url.index('.')]
      ext = url[url.index('.') + 1:]
    except ValueError:
      return False
        
    tmp_arr = [username, website, ext]
    
    if any(map(lambda x: len(x) == 0, tmp_arr)): 
      return False
    elif len(ext) < 3 or len(ext) > 5:
      return False
    else:
      return True

emails = ['ampourgh@yahoo.co.uk', 
          'AMP89@fastmail.fmm', 
          'DOScaseal@gmail.com', 
          'ampourgh@', 
          'ampourgh@yahoo.cooooom']
          
for email in emails:
  print(validate(email))
