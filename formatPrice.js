function formatPrice(price) {
  const priceFormat = "₦" + price.toFixed(2);
  return priceFormat;
}

console.log(formatPrice(1500));
console.log(formatPrice(49.9));
