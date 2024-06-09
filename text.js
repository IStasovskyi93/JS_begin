let names = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];
function compare(arrName) {
  while (arrName[element] === arrName[(element += 1)])
    arrName.splice(arrName.indexOf(element), 1);
}
let newNames = compare(names);
console.log(newNames);
