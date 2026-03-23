/*
### uestion 16

Write a function called `countDown` that takes a number and uses a **for loop** to print every number from that number down to 1, then prints `"Go!"`.

**Example output for `countDown(5)`:**

`5
4
3
2
1
Go!`
*/

function countDown(n) {
  for (i = n; i >= 1; i--) {
    console.log(i);
  }
  console.log("Go!");
}

countDown(5);
