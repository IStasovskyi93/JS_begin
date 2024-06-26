let arrNames = ["Ivan", "Antonij", "Igor", "Iryna", "Helena", "Walerij"];
document.querySelector(".output").addEventListener("click", changeEl);

let doIt = document.getElementsByClassName("doSomething");
doIt[0].style.color = "green";

function changeEl() {
  this.style.color = "blue";
}
let push = document.getElementById("push");
push.addEventListener("click", changeColor);
function changeColor() {
  function randomNumber(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  let draw = `linear-gradient(90deg, rgba(${randomNumber(255)}, ${randomNumber(
    255
  )}, ${randomNumber(255)}, 1) 0%, 
rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, 1) 0%, 
rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, 1) 50%, 
rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(
    255
  )}, 1) 100%)`;
  document.body.style.background = draw;
}

let bird = document.querySelectorAll("li");

let names = document.querySelector("div.nameSpaces");

/*`rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;*/
