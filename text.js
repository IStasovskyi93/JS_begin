//let randomDigit = Math.floor(Math.random() * (100 - 1) + 1);
function randomDigit(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}
let myDigit = randomDigit(60, 100);
console.log(myDigit);
