let bodyPartsArr = ["попа","голова","нос","глаз","ухо","рука"];
let adjectiveArr = ["вонючая","глупая","дурацкая","синяя"];
let wordsArr = ["мочалка","дубина","репа","дверь","лопата","тыква","лужа"];

const getWord = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)];
};

const getFrase = (firstWord,secondWord,thirdWord) => {
  let newArr = ["У тебя"];
  newArr.push(firstWord,"как",secondWord,thirdWord+"!!!");
  return newArr.join(" ")
}



console.log(getFrase(getWord(bodyPartsArr),getWord(adjectiveArr),getWord(wordsArr)));