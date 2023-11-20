let headingElement = document.getElementById("heading");

let newHeadingText = prompt("Введите Ваше имя");

$("#heading").text(`Добро пожаловать, ${newHeadingText}`);
$("body").append("<p>New paragraph</p>");
for (var i = 0; i < 3; i++) {
  let hobby = prompt("Назовите ваше любимое занятие");
  $("body").append(`<p>${hobby}</p>`)
}