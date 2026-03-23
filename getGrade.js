function getGrade(score) {
  if (score >= 70) {
    console.log(`Score: ${score}  Grade: A`);
  } else if (score >= 60) {
    console.log(`Score: ${score}  Grade: B`);
  } else if (score >= 59) {
    console.log(`Score: ${score}  Grade: C`);
  } else {
    console.log(`Score: ${score}  Grade: F`);
  }
}

getGrade(85);
getGrade(62);
getGrade(45);
