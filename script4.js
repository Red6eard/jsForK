
let bodyParts = ["нос","глаз","ухо","рука"];
let adjective = ["вонючая","глупая","дурацкая"];
let word = ["мочалка","дубина","репа","дверь","лопата"];

// функция получения рандомного слова
const getRandomValue = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
};
// функция получения дразнилки из разных слов
const getRandomInsult = () => {
  return `У тебя ${getRandomValue(bodyParts)} как ${getRandomValue(adjective)} ${getRandomValue(word)}!!!`;
}

/*const getRandomInsult = (firstWord,secondWord,thirdWord) => {
  return `У тебя ${firstWord[Math.floor(Math.random()*firstWord.length)]} как ${secondWord[Math.floor(Math.random()*secondWord.length)]} ${thirdWord[Math.floor(Math.random()*thirdWord.length)]}!!!`
};

console.log(getRandomInsult(bodyParts,adjective,word));*/

// задание 2

const arrayOfNumber = [3,2,1];

const joinToString = (arr) => {
  return arr.join(" больше, чем ")
};



console.log(joinToString(arrayOfNumber), getRandomInsult(bodyParts,adjective,word));