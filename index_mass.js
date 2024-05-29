// let km = 1;
// let mil = km * 1.609344;
// console.log(`Distantance 130 mil equal ${130 * mil} km`);
let inch = 2.54;
let pound = 2.2046;
let weight = prompt(`Input your weight in kg`);
let height = prompt(`Input your height in cm`);
let IBM = weight / (height / 100) ** 2;
console.log(`Your weight in pound is ${weight * pound} \n
  Your height in inch is ${height / inch} \n
  Your IBW (indeks of body mass) is ${IBM}`);
