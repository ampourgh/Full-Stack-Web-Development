# ENCRYPTION

# haveanicelife -> haee anl vii ecf
# Read top down from column to column

s = 'haveanicelife'

rint, rfloat = int(len(s) ** 0.5), len(s) ** 0.5

cols = rint < rfloat and rint + 1 or rint

for i in range(cols):
    print(s[i::cols], end=' ')
