/*Immediatly involved function expression*/
let number = 1000;
let result = (function () {
  let number = 500;
  console.log(number);
})();
//let result = 200;
console.log(result);
