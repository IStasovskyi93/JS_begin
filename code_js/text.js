/*document.querySelector(".output").addEventListener("click", changeEl);

let doIt = document.getElementsByClassName("doSomething");
doIt[0].style.color = "green";

function changeEl() {
  this.style.color = "blue";
}*/
function randomNumber(number) {
  return Math.floor(Math.random() * (number + 1));
}
let push = document.getElementById("push");
push.addEventListener("click", changeColor);
function changeColor() {
  let draw = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(
    255
  )}})`;
  document.body.style.backgroundColor = draw;
}
push.style.backgroundColor = "red";

let bird = document.querySelectorAll("li");
bird.forEach((item) => console.log(item));
console.log(bird);
/*const btn = document.getElementById("push");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};*/
