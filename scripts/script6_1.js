// создание нового массива путём изменения старого. 
var animals = ["Кот", "Рыба", "Лемур", "Комодский  варан"];

const changeAnimalsArray = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr[i] = `${arr[i]} - прекрасное животное!`
  };
  return newArr;
};

console.log(animals);
console.log(changeAnimalsArray(animals));