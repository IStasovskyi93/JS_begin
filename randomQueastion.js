let randomNumber = Math.random() * 6;
randomNumber = Math.floor(randomNumber);
let userQuestion = prompt("What you want to know?");
switch (randomNumber) {
  case 0:
    console.log(`${userQuestion} \n Be carefull on tuesdays`);
    break;
  case 1:
    console.log(
      `${userQuestion} \n I see that you will have tatsty lunch today`
    );
    break;
  case 2:
    console.log(`${userQuestion} \n Don\`t cross the road today`);
    break;
  case 3:
    console.log(`${userQuestion} \n Get on skirt on nearly Sunday`);
    break;
  case 4:
    console.log(`${userQuestion} \n Don\`t eat ice cream on that friday`);
    break;
  case 5:
    console.log(`${userQuestion} \n First person who you see is maniak`);
    break;
  default:
    console.log(`${userQuestion} \n Go work or go chill`);
    break;
}
