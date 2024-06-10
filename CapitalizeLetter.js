/*Function wich capitalize first letter of all words in sentence*/

let poem = "thIs will be capiTalized for each word";
function upLetter(sentence) {
  let newSentence = [];
  let words = sentence.split(" ");
  for (let word of words) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    newSentence.push(newWord);
  }
  return newSentence.join(" ");
}
console.log(upLetter(poem));
