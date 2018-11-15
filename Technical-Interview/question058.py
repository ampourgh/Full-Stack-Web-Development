# Refactor conditional statement with sec, min, days, weeks, etc.

from timeit import default_timer as timer

start = timer()

print('Enter a large number:')
secondsVal = input() #100000000000

end = timer()
timerVal = round(end - start)

print("Time taken to choose a number - %s" % (timerVal))

secondsVal *= timerVal

timeyDict =	{
  "a. seconds": 60,
  "b. minutes": 60,
  "c. hours": 24,
  "d. days": 7,
  "e. weeks": 52,
  "f. years": 10,
  "g. decades": 10,
  "h. centuries": 10
}

for key, value in sorted(timeyDict.iteritems()):
  remainder = secondsVal % value

  print("%s - %s  " % (key, remainder))

  if (round(secondsVal / value) != 0):
    secondsVal -= remainder
    secondsVal = round(secondsVal / value)
  else:
    break
