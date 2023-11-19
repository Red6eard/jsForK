let wordsArray = ["программа", "детерминант", "обезьяна" , "кошка", "компьютер", "волна", "портрет", "корабль", "космос", "интернет", "цепочка", "дротик", "человек", "мандарин", "машина", "автобус", "автомобиль", "озарение", "идея", "страх", "ужас", "номер", "комната", "оружие", "балкон", "терраса",  "картина", "светофор", "семафор", "индейка", "курица", "фонарь", "рыба", "фотография", "строка", "огонь", "вода", "сказка", "орудие", "броня", "инновация", "пруд", "речка", "чудовище", "шапка", "нитка", "бочка", "мусор", "останки", "клавиатура", "процессор", "блок", "видеокарта", "наушники", "портфель", "банка", "мозг", "рука", "конфета"];

const pickWord = (words) => {
  return words[Math.floor(Math.random() * words.length)];
};

const setupAnswerArray = (word) => {
  let answerArray = []
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
};
 
const showPlayerProgress = (answerArray) => {
  alert(answerArray.join(" "));
};
 
const getGuess = () => {
  return prompt("Угадайте букву или нажмите Отмена для выхода из игры");
};
 
const updateGameState = (guess, word, answerArray) => {
  let appearances = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess && answerArray[i] !== guess) {
      answerArray[i] = guess.toUpperCase();
      appearances++;
    }
  }
  return appearances;
};
 
const showAnswerAndCongratulatePlayer = (answerArray, numberAttempt) => {
  showPlayerProgress(answerArray);
  if (numberAttempt > 0 && remainingLetters === 0) {
    alert(`Отлично! Было загадано слово: ${word.toUpperCase()}`);
  } else {
    alert(`Плохо! Вас повесили! Было загадано слово: ${word.toUpperCase()}`);
}

};

let word = pickWord(wordsArray);
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;
let numberAttempt = remainingLetters * 2;

while (remainingLetters > 0 && numberAttempt > 0) {
  showPlayerProgress(answerArray);
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите только одну букву.");
  } else {
    guess = guess.toLowerCase();
    let correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
    if (!correctGuesses) {
      numberAttempt--;
      alert(`Осталось ${numberAttempt} попыток`);
    }
  }
};
showAnswerAndCongratulatePlayer(answerArray, numberAttempt);
