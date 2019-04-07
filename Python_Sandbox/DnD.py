import random, math

[x, y, arrRace, arrClass] = [math.ceil(random.uniform(0, 7)), math.ceil(random.uniform(0, 11)), ['human', 'elf', 'dwarf', 'halfling', 'gnome', 'dragonborn', 'tiefling', 'half orc'], [ 'wizard', 'warlock', 'sorceror', 'fighter', 'druid', 'monk', 'cleric', 'paladin', 'ranger', 'rogue','bard', 'barbarian']]

print(x)
print(y)

print('{0} {1}'.format(arrRace[x], arrClass[y]))
