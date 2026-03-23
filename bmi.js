function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi < 18.5) {
    return `${bmi} :  Underweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `${bmi} :  Normal`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    return `${bmi} :  Overweight`;
  } else {
    return `${bmi} :  obese`;
  }
}

console.log(bmi(70, 1.75));
console.log(bmi(100, 1.6));
