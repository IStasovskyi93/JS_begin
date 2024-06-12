// let digit1 = 0;
// let digit2 = 1;
// let temp;
// let digits = [];
// let userOrder = Number(prompt("Input quantity of sequence"));
// while (digits.length < userOrder) {
//   digits.push(digit1);
//   temp = digit1 + digit2;
//   digit1 = digit2;
//   digit2 = temp;
// }

/**
 * Get final digit and return array digits before argument
 * @param {number} finalDigit
 * @returns array digits of fibonachi
 */
const fibonachi = function (finalDigit) {
  const digits = [];
  let step = 1;
  let digit1 = 0;
  for (let digit2 = 1; digit2 <= finalDigit; digit2 = step) {
    digits.push(step);
    step = digit1 + digit2;
    digit1 = digit2;
  }
  return digits;
};

console.log(fibonachi(10));
