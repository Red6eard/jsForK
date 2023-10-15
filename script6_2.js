// генератор случайных строк

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let stringLength = 3;

const randomString = (sourse,length) => {
  let newString = "";
  while(newString.length < length){
  newString += sourse[Math.floor(Math.random()*sourse.length)];
  };
  return newString;
};

console.log(randomString(alphabet,stringLength));