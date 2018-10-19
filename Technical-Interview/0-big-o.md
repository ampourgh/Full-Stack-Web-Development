# BIG O NOTATION NOTES

## CALCULATE

```
def sumOfList(a, n):		  # cost & No. of Times
	total = 0		# 1 & 1
	for i = 0 in (n-1):	    # 2 & n + 1
	      total = total + a # 2 & n
	return total		        # 1 & 1

f(n) = 1 + 2(n+1) + 2n + 1
f(n) = 4n + 4
f(n) = O(n)
```

*O(1)* - static/constant -> the function is going to be the same every time

EX: Simply looking up the third value.
letters = ["A", "B", "C"]
letters[2]

*O(log N)* - "divide + conquer", binary search; growth at the beginning, but flattens out.

EX:

Binary Search ->
looking for a number, go to the center. If bigger or smaller, get rid of one half.
Rinse and repeat until number is found.

*O(N)* - directly + linearly linked with N, will grow in proportion to the input data
EX: Inserting makes the rest of the values move right; as dataset grows, so does the time.
letters = ["B", "C", "D"]
letters.insert(0, "A")

EX: Linear search -> going from left to right, searching for a value.

*O(N log N)* - merge search, the deck of cards

ANYTHING BELOW MIGHT NOT BE PRACTICAL:

*O(N^2)* - checking list + grocery cart; exponential

EX:

Bubble Sort ->
Compare the 2 indices right next to each other.

*O(2^N)*
*O(infinity)* - coin flip, could take forever

-----
