//Do animation with marilia bridhday
//Use all jquery

var $begin_button = $('.begin');
var text_original = $begin_button.text();

var modal = $('<div class="modal"></div>');


$begin_button.mousedown(function(event){
  event.preventDefault();
  $begin_button.text('Hello');
  $('body').append(modal);
}).mouseup(function(event){
  event.preventDefault();
  $begin_button.text(text_original);
});
