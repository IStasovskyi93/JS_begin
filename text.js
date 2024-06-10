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
function outCopy(arrName) {
  let newArr = [arrName[0]];
  for (let item = 1; newArr.length == item; i += 1) {
    if (arrName[item] !== newArr[item - 1]) {
      newArr.push(arrName[item]);
    } else {
      continue;
    }
  }
  return newArr;
}
console.log(outCopy(names));
