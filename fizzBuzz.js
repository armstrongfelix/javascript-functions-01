/*
### Question 18

Write a function called `fizzBuzz` that takes a number `n` and uses a **for loop** to print numbers from 1 to `n`, but:

- Print `"Fizz"` if the number is divisible by 3
- Print `"Buzz"` if the number is divisible by 5
- Print `"FizzBuzz"` if divisible by **both** 3 and 5
- Otherwise print the number itself

**Example output for `fizzBuzz(15)`:**

`1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`
*/

function fizzBuzz(n) {
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
