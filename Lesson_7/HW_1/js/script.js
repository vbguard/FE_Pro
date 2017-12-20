
 var cake_prices = new Array();
 cake_prices["Little"]=20;
 cake_prices["Middle"]=25;
 cake_prices["Biggest"]=35;
 
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

function ValidPhone() {
    var re = /^\d\(\d{3}\)\d{5}/;
    var myPhone = document.getElementById('phonenumber').value;
    var valid = re.test(myPhone);
    if (valid) {
        document.getElementById('phone').className = 'right';
        output = 'Номер телефона введено правильно!'}
    else {
        document.getElementById('phone').className = 'wrong';
        output = 'Номер телефона введено неправильно!';};
}