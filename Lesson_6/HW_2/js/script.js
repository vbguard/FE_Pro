document.onkeyup = function() {
    var keyCode = window.event ? window.event.keyCode : event.which;
    action(keyCode);
}
function action(keyCode) {
    var pushkey = event.keyCode;
    if (pushkey == 17 && 114 ) { 
        alert('Виділено ВСЕ');
    }
    if (pushkey == 17 && 83 ) { 
        alert('Збережено');
    }
    if (pushkey == 16 && 17 && 83 ) { 
        alert('збережено ВСЕ');
    }
}

// Потім попробую через кейси зробити