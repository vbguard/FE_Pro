$(document).ready(function () {
  $('div').click(function (event) { 
    $('div').text('as x:'+event.pageX+'as y:'+event.pageY);;
    
  });
});
