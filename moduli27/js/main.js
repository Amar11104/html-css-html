// function showMessage() {
//     alert("Hello");

// }

function sum(num1,num2) {
    return num1 + num2;
}

function dsFunction() {
    var localVar = "Shkolla Digjitale";
    alert(localVar);

}
dsFunction();

function toSeconds(minutes) {
    return minutes * 60;
}

console.log(toSeconds(60))

function siperfaqjaeTrekendshit(a,h) {
    return 0.5 * a * h;
}

console.log(siperfaqjaeTrekendshit(1,6));

var vetura = {
    marka: "BMW",
    color: "grey",
    kilometers: "100",
    year: "2025",
    get getkilometers() {
        return this.kilometers;
    },
    set setkilometers(km) {
        this.kilometers = km;
    }
    // startEngine: function() {
    //     alert("Start")
    // }
};

Car.startEngine();

alert(vetura.marka);

var Shkolla = {
    name:"Ekonomia",
    viti_ndertimit:"1987",
    nxenesit:"2000"
};

alert(Shkolla.viti_ndertimit);

var computer = new Object();
computer.name = "lenovo";
computer.CPU = "Intel core";
computer.RAM = "16GB";


computer.TYPE = function() {
    return this.name + "." + this.CPU + "," + this.RAM
};

alert(computer.CPU);

console.log(car.getkilometers);

car.setkilometers = 100;

console.log(car.getkilometers);

// showMessage();