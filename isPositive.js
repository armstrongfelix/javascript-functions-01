function isPositive(num) {
  if (num > 0) {
    console.log(`${num}:  is Possetive`);
  } else if (num < 0) {
    console.log(`${num}:  is Negative`);
  } else {
    console.log(`${num}:  is Zero`);
  }
}

isPositive(10);
isPositive(-3);
isPositive(0);
