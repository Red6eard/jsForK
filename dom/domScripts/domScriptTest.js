$("body").append("<h1 id='head'>Видимый заголовок</h1>");
//let head = document.getElementById('head');
//head.innerHTML = 'New heading';
$('#head').fadeOut(2000)
$("body").append("<p id='para'>Первый параграф</p>");

$("body").append("<p id='para2'>Второй параграф</p>");

$("body").append("<p id='para3'>Третий параграф</p>");
$("#para").slideUp(2000);
$("#para").slideDown(2000);
$("#head").fadeIn(3000);
$("#para2").hide();
$("#para2").fadeIn(3000);
$("#para3").fadeTo(3000,0.1)