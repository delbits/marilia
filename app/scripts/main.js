//Do animation with marilia bridhday
//Use all jquery

var $begin_button = $('.begin');
var text_original = $begin_button.text();

$begin_button.on('click', function(event){
  event.preventDefault();
  $('.modal_view').css("display", "block")
});

$('.modal_view').on('click', function(){
  $(this).css("display", "none");
});
