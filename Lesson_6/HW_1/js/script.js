document.onkeyup = function() {
    var keyCode = window.event ? window.event.keyCode : event.which;
    changeColor(keyCode);
}

function changeColor(keyCode) {
    var pushkey = event.keyCode;
    if (pushkey == 114 ) { // r
        document.getElementById("text-r").style.color = "red";
    }
    if (pushkey == 103 ) { // r
        document.getElementById("text-g").style.color = "green";
    }
    if (pushkey == 98 ) { // r
        document.getElementById("text-b").style.color = "blue";
    }
}