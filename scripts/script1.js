const secondsInAMinute = 60;
const minutesInAHourse = 60;
let secondsInAHour = secondsInAMinute * minutesInAHourse;
const hoursInADay = 24;
let secondsInADay = secondsInAHour * hoursInADay;
const dayInAYear = 365;
let secondsInAYear = secondsInADay * dayInAYear;

let myAge = 37;


const secondsInMyAge = (age) => {
  return age * secondsInAYear + " - мой возраст в секундах"
};

console.log(secondsInMyAge(myAge));