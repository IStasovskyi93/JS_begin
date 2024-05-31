/* Cycle for. 
I get array with 10 objects {name: lesson(DIGIT), status true or false(it`s depends of DIGIT)}*/

let myWork = [];
for (let digit = 0; myWork.length < 10; digit++) {
  let lesson = { name: "lesson" + digit, status: digit % 2 ? true : false };
  myWork.push(lesson);
}
console.log(myWork, myWork.length);
