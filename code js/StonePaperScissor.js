let userChoose = prompt("Choose: stone, paper or scissors");
let pcChoose = Math.random() * 2;
pcChoose = Math.floor(pcChoose);
/*PC selection: 0 = stone; 1 = paper; 2 = scissors*/
pcList = ["stone", "paper", "scissors"];
if (userChoose === pcList[pcChoose]) {
  console.log(
    `Your selected ${userChoose}. PC also selected ${pcList[pcChoose]}. Restart page.`
  );
} else if (
  (userChoose == "stone" && pcChoose == 1) ||
  (userChoose == "paper" && pcChoose == 2) ||
  (userChoose == "scissors" && pcChoose == 0)
) {
  console.log(
    `Your selceted ${userChoose}, but PC selected ${pcList[pcChoose]}.\n PC win!!!`
  );
} else if (
  (userChoose == "stone" && pcChoose == 2) ||
  (userChoose == "paper" && pcChoose == 0) ||
  (userChoose == "scissors" && pcChoose == 1)
) {
  console.log(
    `Your selceted ${userChoose}, PC selected ${pcList[pcChoose]}.\n Gratulation, you are Win!!!`
  );
} else {
  console.log(`You inputed ${userChoose}. Select stone, paper or scissors`);
}
