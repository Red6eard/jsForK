
//установка таймеров

const timeOut = (text) => {
  console.log(text);
  return
};
firstTimer = setTimeout(timeOut,10000,"hello");
secondTimer = setTimeout(timeOut, 5000, "world");
//вывод в консоль ID таймеров
console.log(firstTimer, secondTimer);
// удаление таймеров
clearTimeout(secondTimer);
clearTimeout(firstTimer);


// установка интервалов

intervalID = setInterval(timeOut,1000,'hello!');
console.log(intervalID);

// удаление интервала через 10 сек
const stopMessage = (id) => {
  clearInterval(id)
};
setTimeout(stopMessage,10000,intervalID)


