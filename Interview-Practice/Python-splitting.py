N = int(5)
arr2 = "0 12 9 61 5 14"
integers = arr2.split(" ")

if all(int(i) >= 0 for i in integers):
    if any(num == num[-1:] for num in integers):
        print("True")
    else:
            print("False")
else:
    print("False")

# ----

str1 = """<feed xml:lang='en'>
    <title>title</title>
    <subtitle lang='en'>Programming challenges</subtitle>
    <link rel='alternate' type='text/html' href='http://www.title.com/'/>
    href='http://www.title.com/'/>
    href='http://www.title.com/'/>
    <updated>2013-12-25T12:00:00</updated>
</feed>"""

a = 0

# strip() for individual characters
# stplit(" ") for sentences
s = list(map(str,str1.split(" ")))
if('href=' in s):
    a = 1
    a += s.count('hello')
print(a)
