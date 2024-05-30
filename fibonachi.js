let digit1 = 0;
let digit2 = 1;
let temp;
let digits = [];
while (digits.length < 15) {
  digits.push(digit1);
  temp = digit1 + digit2;
  digit1 = digit2;
  digit2 = temp;
}
console.log(digits);
