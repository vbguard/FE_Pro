$(document).ready(function(){
  $("p").click(function(){
    var action = $("p").parent();
    $(action).css({
      'background': 'grey',
      'border':'1px solid dark'
      
    });
  });
});