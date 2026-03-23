/*
### Question 14

Write a function called `sumOfEvens` that takes a number `n` and uses a **for loop** to add only the **even numbers** from 1 to `n`. Return the total.

**Example:**

`sumOfEvens(10)  →  30   (2 + 4 + 6 + 8 + 10)
sumOfEvens(6)   →  12   (2 + 4 + 6)`
*/

function sumOfEvens(n) {
  let sum = null;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}

sumOfEvens(10);
sumOfEvens(2);
