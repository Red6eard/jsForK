const scores = {
  "Степан" : 0,
  "Юра" : 0,
  "Вадим" : 0
};

const scoresUp = name => scores[name] += 1;
scoresUp("Степан");
scoresUp("Степан");
scoresUp("Юра");
console.log(scores);


// задание 2

const myCrazyObject = {
  "name": "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула"
};

let result = myCrazyObject["some array"][2].number;


console.log(result);