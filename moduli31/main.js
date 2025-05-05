// for(var i=0; i<5; i++) {
//     console.log("Value of i is:"+i);
// }

var person = {firstname:"Amar" , lastname:"Dushullovci" , email:"amar.dushulovci@gmail.com"};

var text='';
var z;

for (z in person ) {
    text += person[z];
}

console.log(text);

///////////////////////for of////////////////////////

// var names = ['Benjamin', 'Elsa', 'Mal'];

// var x;

// for(x of names );
// document.write(x + "<br>");

// let i=0;

// do {
//     i += 1;
//     console.log(i);
// }

// while(i<5);

var names = ['HTML', 'CSS' , 'JAVASCRIPT']
var y;

for(y of names) {
    console.log(y);
}


var students = ["John", "Mark", "Ana"];

for(i=0;i<students.length;i++){
    document.write(students[i]+'<br>');
}


var name_input = document.getElementById("name_input");
var btnAdd = document.getElementById("btnAdd");
var btnShow = document.getElementById("btnShow");

btnAdd.onclick = function() {
    students.push(names_input.value);
}

btnShow.onclick = function() {
    for(i=0;i<students.length; i++) {
        document.write(students[i] + '<br>');
    }
}