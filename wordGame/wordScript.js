// создаем массив со словами которые будем загадывать
const words = [
    "шляпа",
    "болт",
    "синхрофазотрон",
    "динозавр",
    "лошарик"
];

//выбираем случайное слово из массива
let word = words[Math.floor(Math.random() * words.length)];

// создаем итоговый массив и заполняем его "_"
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
};

// создаем переменную для отслеживания кол-ва букв которые осталось отгадать
let remainingLeters = word.length;

// игровой цикл
while (remainingLeters > 0) {
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
        //если все верно, обновляем состояние игры
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                answerArray[i] = guess;
                remainingLeters--;
            }
        }
    }
    //конец игрового цикла
};

//отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert(`Поздравляем, ты отгадал слово: ${word.toUpperCase()}!!!`)
