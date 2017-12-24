
$(document).ready(function () {
  var value = $('#text').val();
  
  $("#down").click(function(){
    $("ol").append("<li>"+value+'<button id="delete">-</button></li>');
  });

  $("#up").click(function(){
    $("ol").prepend("<li>"+value+'<button id="delete">-</button></li>');
  });

  $("#delete").click(function(){
    $(this).remove();
});


});
