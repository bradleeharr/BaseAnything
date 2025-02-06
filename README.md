# Convert Number to Base


https://bradleeharr.github.io/BaseAnything/

In JavaScript, converting a number from a base-10 string to any other base is trivial:
```js
num.toString(base)
```
The works for base 2 to 36, essentially the functional amount that's easily represented using numbers and letters (1-9/A-Z). 
However, it's not easy to find calculators for other bases. 

---

Future work might include:
Future plans - non-integer bases
* Extension from 36 to Base-64. Base 64 is a common encoding scheme that uses A-Z, a-z, 1-9, and +, /, = to get to 64 characters.  
* If I wanted to see a number in base-1000, what would that even look like?
* https://en.wikipedia.org/wiki/Non-integer_base_of_numeration
* Irattional bases (pi, e, sqrt(2)) 
