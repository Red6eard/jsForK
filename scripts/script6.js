// условия if...else
let name = "Вадим";

const greeting = name => {
  if (name === "Вадим") {
    return "Аве мне!!!"
  } else if (name === "Степан") {
    return `Привет ${name}!`
  } else {
    return "Привет незнакомец!"
  }
};
name = "Степан";
name = "Семен";

console.log(greeting(name));


// цикл while

let number = 3;

const powerOfNum = num => {
  while (num <= 10000) {
    console.log(num);
    num *= 3
  }
};
powerOfNum(number);

//цикл for

const powerOfNum2 = num => {
  for (let i = num; i < 10000; i *= 3) {
    console.log(i);
  }
};
powerOfNum2(number)
