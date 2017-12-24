$(document).ready(function(){
  $("button").click(function(){
    var root = 'https://jsonplaceholder.typicode.com/photos/';
    var value = $("#txt_name").val();
    console.log(value);
    $.ajax({
      type: 'GET',
      url: root + value,
      dataType: 'json',
      success: function (objData) {
        console.log(objData);
  
  
        for(var i in objData) {
        $(document.body).append("<div><p>"+ objData.id + objData.title + "</p>"+ '<img src="' + objData.thumbnailUrl + '" alt="avatar" />'+ "</div>");
  
        console.log(i  + objData);
        }
  
  
  }
    }).then(function(data) {
      console.log(data);
      });
  });
});
