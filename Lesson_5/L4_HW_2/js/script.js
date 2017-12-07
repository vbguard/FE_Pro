window.onload = function () {
    var mainh = document.getElementById('text-h');
    var p1 = document.createElement('p');
    p1.innerHTML = 'js work';
    mainh.appendChild(p1);
    // mainh.insertBefore(p1);
    var p2 = document.createElement('p');
    // p1.insertBefore(mainh);
    p2.innerHTML = 'js work';
    document.body.insertBefore(p2, mainh);
}