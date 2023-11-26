// task 1
let friends = ['Alex','Mikey','Dan'];

$('body').append('<h1>My friends</h1>');
for(let i=0; i<friends.length; i++){
  $('body').append(`<p>${friends[i]} the best!!!</p>`)
};
$('p').hide().fadeIn(3000);

// task2
let num = 1000;
for(let i=0; i<10; i++){
  $('h1').fadeOut(num);
  $('h1').delay(5000).fadeIn(num);
  num += 1000;
};

//task 3

