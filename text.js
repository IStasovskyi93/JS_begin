/*Recoursive function.
Calculation factorial*/

function factorial(digit) {
  if (digit === 0) {
    return 1;
  } else {
    let digits = [];
    for (digit; digit >= 2; digit -= 1) {
      digits.push(digit);
    }
    for (let item in digits) {
      let result = [];
      while (item < digits.length) {
        result.push(item + "");
      }
      result.push(item);
      item *= item;
    }
    return result + "=" + item;
  }
}
factorial(8);
