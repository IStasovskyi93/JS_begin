let poem = "Gay is russian poet";
let forget = "is";
for (let counter = 0; counter < 10; counter++) {
  if (poem[counter] + poem[counter + 1] === "is") {
    continue;
  }
  poem = poem + poem[counter] + poem[counter + 2] + " ";
}
console.log(poem);
