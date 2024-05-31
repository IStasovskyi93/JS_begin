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
