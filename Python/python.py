from datetime import datetime
now = datetime.now()

print('%02d/%02d/%04d' % (now.month, now.day, now.year))
print('%02d:%02d:%02d' % (now.hour, now.minute, now.second))

# --------------------

def camelot(string_1, string_2):
  print("Let's not go to %s. 'Tis a silly %s." % (string_1, string_2))
  

camelot("Camelot", "place")

# --------------------
