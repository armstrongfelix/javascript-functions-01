function sumOneToN(n) {
  let sum = null;
  for (i = 1; i <= n; i++) {
    sum += i;
    sum = sum + i;
  }
  console.log(sum);
}

sumOneToN(5);
sumOneToN(10);
