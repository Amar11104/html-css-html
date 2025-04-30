var wakeuptime;
var dstime;
var sleeptime;

var noon = 12;

function showCurrentTime() {
    var clock = document.getElementById('clock');
    var CurrentTime = new Data();
    var hours = currentTimel.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if(hours>= noon) {
        meridian = "PM";
    }

    var clockTime = hours + ":"  + minutes + ":" + seconds + "" + meridian;
    clock.innerHTML = clockTime;

    var oneSecond = 1000;
    setInterval(showCurrentTime, oneSecond);

    function changeImage() {
        var time = newData.getHours();
        console.log(time);
    }

    var image = "img/ds_clock.png";
    var imageHTML = document.getElementById("timeImage");

    if(time==wakeuptime){
        image = "img/morning.gif";
        console.log("morning");
    }

    else if (time == dstime) {
        image = 'img/class.gif';
    }

    else if (time == sleeptime) {
        image = 'img/sleep.gif';
    }

    imageHTML.src = Image;
    console.log(imageHTML.src);

    function uptadeClock() {
        var wakeuptTimeselector = Document.getElementById('wakeUpTimeSelector');
        wakeuptime = wakeuptTimeselector.values;

        var dsTimeSelector = Document.getElementById('dsTimeSelector');
        dsTime = dsTimeSelector.values;

        var sleepTimeSelector = Document.getElementById('sleepTimeSelector');
        sleeptime = sleepTimeSelector.values;
    }

    var saveButton = document.getElementByIdsaveButton('saveButton');

    saveButton.addEventListener("click", updateClock);




}