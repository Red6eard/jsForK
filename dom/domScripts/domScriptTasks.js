let friends = ['Alex','Mikey','Dan'];

$('body').append('<h1>My friends</h1>');
for(let i=0; i<friends.length; i++){
  $('body').append(`<p>${friends[i]} the best!!!</p>`)
};
$('p').hide().fadeIn(3000);


