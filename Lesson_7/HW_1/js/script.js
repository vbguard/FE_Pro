
 var cake_prices = new Array();
 cake_prices["Little"]=20;
 cake_prices["Middle"]=25;
 cake_prices["Bigest"]=35;
 
 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["Lemon"]=5;
 filling_prices["Custard"]=5;

function getCakeSizePrice()
{  
    var cakeSizePrice=0;
    var theForm = document.forms["cakeform"];
    var selectedCake = theForm.elements["selectedcake"];
    for(var i = 0; i < selectedCake.length; i++)
    {
        if(selectedCake[i].checked)
        {
            cakeSizePrice = cake_prices[selectedCake[i].value];
            break;
        }
    }
    return cakeSizePrice;
}

function getFillingPrice()
{
    var cakeFillingPrice=0;
    var theForm = document.forms["cakeform"];
    var selectedFilling = theForm.elements["filling"];
    
    cakeFillingPrice = filling_prices[selectedFilling.value];

    return cakeFillingPrice;
}

function calculateTotal()
{
    var cakePrice = getCakeSizePrice() + getFillingPrice();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    var valuebutton = document.getElementById('submit');
    divobj.style.display='block';
    divobj.innerHTML = "Загальна ціна - "+cakePrice+"&#162";
    valuebutton.value = cakePrice+" cent";
    
}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}

function action() {
    
}

function orderComplite() {
    var newWindow = window.open("");
    newWindow.location.href = ("submit.html");
}

jQuery.validator.addMethod("requiredRadioValue", function(value, element, params) { 
    var selectedValue = $('input:radio[name=' + element.name + ']:checked').val(); 
    return (typeof(params) == 'array') ? (params.indexOf(selectedValue) != -1) : selectedValue == params;
}, "You must select the required option."); 


//  if (empty) {
//     $('#submit').attr('disabled', 'disabled'); 
//   } else {
//     $('#submit').removeAttr('disabled'); 
//   }
    