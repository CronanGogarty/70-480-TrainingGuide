(function () {
    var today = new Date();
    console.log("Today's date = " + today);

    this.myCar = new createVehicle('Mazda', 'MX-5', 'Silver');

}());

function createVehicle(_make, _model, _color) {
    var make = _make;
    var model = _model;
    var color = _color;

    this.getMake = function () { return make };
    this.getModel = function () { return model };
    this.getColor = function () { return color };
};

document.getElementById('btnGetVehicle').addEventListener('click', sayHello, false);

function sayHello() {
    alert(myCar.getMake());
}

