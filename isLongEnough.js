function isLongEnough(word, minLength) {
  if (word.length >= minLength) {
    return true;
  } else {
    return false;
  }
}

console.log(isLongEnough("hello", 3));
console.log(isLongEnough("hi", 5));
