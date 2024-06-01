/*Cycle for of.
I used it for iteration on array and show elements*/
let box = [];
for (let count = 0; box.length < 10; count++) {
  box.push(count);
}
for (let item of box) {
  console.log(item);
}
