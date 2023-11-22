let headingElement = document.getElementById("heading");

let newHeadingText = prompt("Введите Ваше имя");
//добавляем текст в выбранный элемент
$("#heading").text(`Добро пожаловать, ${newHeadingText}`);
//добавляем затухание(длительность 3 сек.) к выбранному элементу с последующим появлением через 2 сек. 
$("#heading").fadeOut(3000).fadeIn(2000)
// добавляем новый элемент в конец документа
$("body").append("<p>New paragraph</p>");
// через цикл можно добавить несколько документов
for (var i = 0; i < 2; i++) {
  let hobby = prompt("Назовите ваше любимое занятие");
  $("body").append(`<p>${hobby}</p>`)
}
