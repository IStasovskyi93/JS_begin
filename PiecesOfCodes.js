/*I get array of digits with step, then I`d like
I used cycle ---do while---*/
let condition = 0;
let step = 1;
let score = [];
do {
  condition = condition + step;
  score.push(condition);
} while (condition != 100);
console.log(score);

/* Cycle for. 
I get array with 10 objects {name: lesson(DIGIT), status true or false(it`s depends of DIGIT)}*/
let myWork = [];
for (let digit = 0; myWork.length < 10; digit++) {
  let lesson = { name: "lesson" + digit, status: digit % 2 ? true : false };
  myWork.push(lesson);
}
console.log(myWork, myWork.length);

/* Cycle in cycle.
Create table 5 rows/7 columns with help cycle in cycle*/
let myTable = [];
let rows = 5;
let columns = 7;
for (let counter = 0; myTable.length < rows; counter++) {
  myTable.push([]);
  for (let template = 0; myTable[counter].length < columns; template++)
    myTable[counter].push(template);
}
console.table(myTable);
