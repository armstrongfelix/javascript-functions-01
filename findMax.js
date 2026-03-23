function findMax(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
    s;
  }
}

console.log(findMax(3, 9, 5));
console.log(findMax(12, 7, 20));
