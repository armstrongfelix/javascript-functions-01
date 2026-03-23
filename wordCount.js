/*
Write a function called `wordCount` that takes a sentence string and returns the number of words in it.

> Hint: Use `.split(" ")`
> 

**Example:**

`wordCount("I love JavaScript")  →  3
wordCount("Hello World")        →  2`
*/

function wordCount(sentence) {
  let count = null;
  for (i of sentence.split(" ")) {
    count += 1;
  }
  console.log(`${sentence}: Word Count → ${count}`);
}

wordCount("I love JavaScript");
wordCount("Hello World");
