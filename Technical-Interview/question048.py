"""
Nested Lists

"""

N = [(5, 'Harry'), (37.21, 'Berry'), (37.21, 'Tina'), (37.2, 'Akriti'), (41, 'Harsh')]

students = []

def getKey(item):
  return item[1]
  
for i in range(len(N)):
    grade = [N[i][1], float(N[i][0])]
    students.append(grade)    

students = sorted(students, key = getKey)[::-1]
print(students)

second_highest = students[1][1]
second_arr = [students[1][0], students[1][1]]

for name, grade in students:
    if grade == second_highest:
        second_arr.append([name, grade])

print('\n'.join([name for name, grade in sorted(students) if grade == second_highest]))

>>> [['Harsh', 41.0], ['Tina', 37.21], ['Berry', 37.21], ['Akriti', 37.2], ['Harry', 5.0]]
>>> Berry
>>> Tina
