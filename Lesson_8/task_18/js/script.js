$(document).ready(function () {
  var cardPeople = {
    "name": 'John',
    "surname": 'McDizer',
    "date": "25.05.1987"
  };
  var data = JSON.stringify(cardPeople);
  var obj = JSON.parse(data);
  console.log(cardPeople["name"]);
  $('button').on('click', function () {
    $('input[name="name"]').attr('value', 'obj.name');  
    $('label[name="name"]').text(obj.name);
    $('input[name="surname"]').attr('value', 'obj.surname');  
    $('label[name="surname"]').text(obj.surname);
    $('input[name="date"]').attr('value', 'obj.date');  
    $('label[name="date"]').text(obj.date);
  });
});

var top_brands = {
  'Adidas' : 100,
  'Nike'   : 50
  };
for (var key in top_brands){
    console.log(key, top_brands[key]);
    }