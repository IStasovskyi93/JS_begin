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

/* Cycle for*/
let myWork = [];
digit = 0;
for (let lesson = []; lesson.length < 10; digit++) {
  lesson.push({ name: "lesson" + digit, status: digit % 2 ? true : false });
}
console.table(lesson);
