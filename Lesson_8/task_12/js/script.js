$(document).ready(function(){
  var search = $('html').find("input");
  console.log(search);
  $(search).wrapAll('<form></form>'); 
});