
// создаем массив со словами которые будем загадывать
const words = [
    "шляпа",
    "болт",
    "синхрофазотрон",
    "динозавр",
    "лошарик"
];

/*
//выбираем случайное слово из массива
let word = words[Math.floor(Math.random() * words.length)];

// создаем итоговый массив и заполняем его "_"
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
};

// создаем переменную для отслеживания кол-ва букв которые осталось отгадать
let remainingLeters = word.length;
let remainingAttempts = 10;
// игровой цикл
while (remainingLeters > 0 && remainingAttempts > 0) {
    //показываем состояние игры
    alert(answerArray.join(" "));
    //запрашиваем вариант ответа
    let guess = prompt("Угадай букву или нажми 'Отмена' для выхода из игры");
    if (guess === null) {
    //если ответ не введен выходим из игрового цикла
    break;
    } else if (guess.length !== 1) {
        //если введеный ответ НЕ равен одному символу
        alert("Введите только ОДНУ букву!");
    } else {
        // если все верно, обновляем состояние игры
        let foundLetter = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() === guess.toLowerCase() && answerArray[i] === "_") {
                answerArray[i] = guess;
                remainingLeters--;
                foundLetter = true;
            }
        }
  
        if (!foundLetter) {
            // если буква не была найдена, уменьшаем количество попыток
            remainingAttempts--;
            alert(`Неправильная буква! Осталось ${remainingAttempts} попыток.`);
        }
    }
// конец игрового цикла
};
    //отображаем ответ и поздравляем игрока
    alert(answerArray.join(" "));
    if (remainingLeters === 0) {
      alert(`Поздравляем, ты отгадал слово: ${word.toUpperCase()}!!!`);
    } else {
      alert("Упс! Ты не справился. Попробуй еще раз!");
    };
    */
    
    // переписываем на функциях:
    
const pickWord = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const setupAnswerArray = (word) => {
  let answerArr = [];
for (let i = 0; i < word.length; i++) {
    answerArr[i] = "_";
  };
  return answerArr
};

const showPlayerProgress = (arr) => {
  alert(arr.join(" "))
};

const getGuess = () => {
  return prompt("Угадай букву или нажми 'Отмена' для выхода из игры");
};

const updateGameState = (guess, word, answerArray) => {
  let foundLetter = false;
    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === guess.toLowerCase() && answerArray[i] === "_") {
          answerArray[i] = guess;
          remainingLeters--;
          foundLetter = true;
      }
  }
  if (!foundLetter) {
    // если буква не была найдена, уменьшаем количество попыток
    remainingAttempts--;
    alert(`Неправильная буква! Осталось ${remainingAttempts} попыток.`);
  };
};

const showAnswerAndCongratulatePlayer = (arr) => {
  showPlayerProgress(arr);
    if (remainingLeters === 0 && remainingAttempts > 0) {
      alert(`Поздравляем, ты отгадал слово: ${word.toUpperCase()}!!!`);
    } else {
      alert("Упс! Ты не справился. Попробуй еще раз!");
    }
};



let word = pickWord(words);
let answerArray = setupAnswerArray(word);
let remainingLeters = word.length;
let remainingAttempts = word.length * 3;


while (remainingLeters > 0 && remainingAttempts > 0) {
  showPlayerProgress(answerArray);
  let guess = getGuess();
  if (guess === null){
    break
  } else if (guess.length !== 1) {
        //если введеный ответ НЕ равен одному символу
        alert("Введите только ОДНУ букву!");
  } else {
    correctGuesses = updateGameState(guess,word, answerArray);
    remainingLeters -= correctGuesses
  }
};
showAnswerAndCongratulatePlayer(answerArray);
