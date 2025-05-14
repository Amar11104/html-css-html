// function printName() {
//     document.write("Test1");
//     document.write("<br>");
//     setTimeout(function() {document.write("test2");}, 3000);
//     document.write("test3");
// }

// printName();

var colors = ['red','green','black','blue'];

function changeBgColor(){
    document.querySelector('body').style.background=colors[Math.floor(Math.random()*colors.length)]
}

var names = ['Test1','Test2','Test3','Test4'];

function changeNames() {
    document.querySelector('p').innerHTMl = names[Math.floor(Math.random()*names.length)];
}

setInterval(changeBgColor, 1000);
setInterval(changeNames, 1000);

var circle = document.getElementById('circle');
var showtime = document.getElementById('time');

function showCircle()
{
    circle.style.display = 'block';
    circle.style.top = Math.random() * 500 + 'px';
    circle.style.left = Math.random() * 900 + 'px';
    timestart = new Date().getTime();

    }

showCircle();