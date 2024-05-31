let maxDigit = 100;
let randomDigit = Math.random() * (maxDigit + 1);
randomDigit = Math.floor(randomDigit);
let userDigit = Number(prompt(`Input digit from 0 to ${maxDigit}`));
let answers = [""];
let guess = false;
while (!guess && userDigit != "q") {
  if (
    userDigit > randomDigit &&
    userDigit >= 0 &&
    userDigit <= 100 &&
    userDigit != ""
  ) {
    answers.push(userDigit);
    userDigit = prompt(
      `Atempt ${answers.length}. \nTry else. Your choice ${userDigit} bigger then MAGIC digit. \nInput digit from 0 to ${maxDigit} or press q to exit.`
    );
  } else if (
    userDigit < randomDigit &&
    userDigit >= 0 &&
    userDigit <= 100 &&
    userDigit != ""
  ) {
    answers.push(userDigit);
    userDigit = prompt(
      `Atempt ${answers.length}. \nTry else. Your digit ${userDigit} less then MAGIC digit. \nInput digit from 0 to ${maxDigit} or press q to exit.`
    );
  } else if (userDigit == randomDigit) {
    answers.splice(0, 1);
    answers.push(userDigit);
    alert(
      `Gratulation, You are find MAGIC digit ---${randomDigit}--- \nYour attempts score ${answers.length} and you inputed ${answers}.`
    );
    guess = true;
  } else {
    userDigit = prompt(
      `Your last choice ${userDigit} isn\`t correct. \nInput digit from 0 to ${maxDigit} or press q to exit.`
    );
  }
}
