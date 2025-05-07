var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('tekst_id');

button.onclick = function () {
    text.innerHTML = input.value;
}

// var text = "The best School in the world is Digital School";
// var result = text.search("Digital School");
// document.getElementById('result1').innerHTML = result;

// var text = "The best School in the world is Digital School";
// var result = text.search(/Digital School/, "Another School");
// document.getElementById('result2').innerHTML = result;


// var text = "abcqddhef";
// var regex = new RegExp('abc');
// document.getElementById("result3").innerHTML = regex.test(text);

// var text = "My school is the best school school in the world";
// var regex = /school/g;
// document.getElementById("result4").innerHTML = text.match(regex);

var text = "My school is the best school school in the world";
var regex = /i/g;
document.getElementById("result5").innerHTML = text.match(regex);

var text = "My school is the  1 best  5school school in the world";
var regex = /1-9/g;
document.getElementById("result5").innerHTML = text.match(regex);