// 1)Создать конструктор "Создать существо" с методами 
// Говорит, Движение, Лапы
// Обявить через конструктор таких товарищей как  ( лошадь, кенгуру, щука ) 
// При использовании метода лапы должна быть проверка и задаваться определённое количество лап
// Метод движение описывает способ передвижения 
// Говорит описывает звук.
// Так же должны быть продуманы дефолтные методы для случайного создания 

function Create(name) {
    // свойство
    this.firstName = name;

    // метод - свойство объекта, которое содежит значение в виде функции.
    this.sayHello = function () {
        document.write("Hello! My name is " + this.firstName + "<br /> ");
    }

    this.HumanRun = function(){
        document.write("This human run" + this.firstName + "<br /> ");
    }
    this.sayAlert = function(){
        alert("Hello! My name is " + this.firstName);
    }

    if(this.firstName == "Rocky"){
        this.sayAlert = function(){
            alert("Hello! llalalla" + this.firstName);
        }
    }
}

// Создание двух экземпляров типа Human

var h = new Human("Homer");
var r = new Human("Rocky");

// Вызов метода SayHello() на созданых обьектах. 
//        h.sayHello();
//        r.sayHello();

h.HumanRun();

//        h.sayAlert();
//        r.sayAlert();