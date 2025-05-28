// $(window).ready(function(){
//     alert('It is working!!!');
// });

// $('#header');
// $('ul li');
// $('li');
// $('.stundent');
// $('a.test:first');
// $('tr:odd');
// $('div:visible');

$('li').click(function(){
	alert('clicked');
});

// $('#btn').click(function() {
//     console.log ($('#h1') text());
//     $('#h1').text('Testing text');
//     $('#h1').append('Extra text');
// });

$("#btn3").click(function(){
    $(".hidden").show('slow');
});

$("#btn4").click(function(){
    $(".hidden").hide();
});

$('#square').click(function(){
    $('#square').animate({
        'width': '200px',
        'height': '200px'
    });
});