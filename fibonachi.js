let digit1 = 0;
let digit2 = 1;
let temp;
let digits = [];
let userOrder = Number(prompt("Input quantity of sequence"));
while (digits.length < userOrder) {
  digits.push(digit1);
  temp = digit1 + digit2;
  digit1 = digit2;
  digit2 = temp;
}
console.log(digits);
