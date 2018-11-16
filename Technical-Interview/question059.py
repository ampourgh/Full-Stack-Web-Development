# A basic queue has the following operations:

# Enqueue: add a new element to the end of the queue.
# Dequeue: remove the element from the front of the queue and return it.
# In this challenge, you must first implement a queue using two stacks. Then process  queries, where each query is one of the following  types:

# 1 x: Enqueue element  into the end of the queue.
# 2: Dequeue the element at the front of the queue.
# 3: Print the element at the front of the queue.

queue = [
      [1, 42],
      [2],
      [1, 14],
      [3],
      [1, 28],
      [3],
      [1, 60],
      [1, 78],
      [2],
      [2]
]

temp, stack = [], []

for query in queue:
  print(stack)
  if query[0] == 1:
    temp.append(query[1])
    print("\nenqueue - %s \n" %(temp[0]))
    item = temp.pop()
    stack.insert(0,item)
  elif query[0] == 2:
    print("\ndequeue - %s \n" %(stack[0]))
    stack.pop()
  else:
    print(stack[-1])
