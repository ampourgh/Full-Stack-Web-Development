"""
Nested Lists

"""

N = [(5, 'Harry'), (37.21, 'Berry'), (37.21, 'Tina'), (37.2, 'Akriti'), (41, 'Harsh')]
students = []
for i in range(len(N)):
    grade = [N[i][1], float(N[i][0])]
    students.append(grade)    
students = sorted(students, key=lambda x: x[1])
second_highest = students[0][1]
for name, grade in students:
    if grade > second_highest:
        second_highest = grade
        break
print('\n'.join([name for name, grade in sorted(students) if grade == second_highest]))
