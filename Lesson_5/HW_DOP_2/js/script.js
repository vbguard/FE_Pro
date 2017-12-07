var oX=0;
var oY=0;
function left() {
   var move = document.getElementById('object');
   oX+=50;
   move.style.right= oX+"px";
}
function right() {
   var move = document.getElementById('object');
   oX-=50;
   move.style.right= oX+"px";
}
function gtop() {
   var move = document.getElementById('object');
   oY-=50;
   move.style.top= oY+"px";
}
function bottom() {
   var move = document.getElementById('object');
   oY+=50;
   move.style.top= oY+"px";
}