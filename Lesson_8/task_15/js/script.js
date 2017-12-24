$(document).ready(function () {
  $('input:text').blur(function action() { 
    if (!this.value){
      $(this).addClass('warning').removeClass('correct')
      }
      else {
      $(this).addClass('correct').removeClass('warning')
    }
    console.log(action());
  });
});