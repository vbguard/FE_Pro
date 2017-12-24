$(document).ready(function(){
  $("p").hover(function(){
      $(this).css("background-color", "lightblue");
      $(this).animate({width:'50px'},"slow");
      }, function(){
      $(this).animate({width:'200px'},"slow");  
      $(this).css("background-color", "pink");
  });
});