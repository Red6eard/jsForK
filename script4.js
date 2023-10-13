let bodyParts = ["нос","глаз","ухо","рука"];
let adjective = ["вонючая","глупая","дурацкая"];
let word = ["мочалка","дубина","репа","дверь","лопата"];

const getRandomInsult = (firstWord,secondWord,thirdWord) => {
  return `У тебя ${firstWord[Math.floor(Math.random()*firstWord.length)]} как ${secondWord[Math.floor(Math.random()*secondWord.length)]} ${thirdWord[Math.floor(Math.random()*thirdWord.length)]}!!!`
};

console.log(getRandomInsult(bodyParts,adjective,word));