function capitalize(char) {
  const first = char.charAt(0).toUpperCase();
  const rest = char.slice(1);
  const capitalized = first + rest;
  return capitalized;
}

console.log(capitalize("hello"));
console.log(capitalize("javascript"));
