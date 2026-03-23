/*
Write a function called `countVowels` that takes a string and returns how many vowels (`a, e, i, o, u`) it contains. Ignore uppercase/lowercase differences.

**Example:**

`countVowels("hello")       →  2
countVowels("JavaScript")  →  3`
*/

function countVowels(character) {
  let count = null;
  for (i of character.toLowerCase().split("")) {
    for (j of ["a", "e", "i", "o", "u"]) {
      if (i == j) {
        count += 1;
      }
    }
  }
  console.log(`${character}: Vowel Count → ${count}`);
}

countVowels("hEllo");
countVowels("JavaScript");
