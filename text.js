let age = Number(prompt("How old are you?"));
let message;
if (age >= 21) {
  message = "You can to enter and to buy alcohol";
} else if (age >= 19) {
  message = "You can to enter entire but can`t to buy alcohol";
} else {
  message = "You can`t to enter";
}
console.log(message);
