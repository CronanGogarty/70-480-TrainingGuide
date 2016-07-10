//declare a parent class that may be inherited by children
//parent class may be known as 'generalized', 'superclass'...
var ParentVehicle = (function () {
    function ParentVehicle(theMake, theModel, theYear) {
        this.make = theMake;
        this.model = theModel;
        this.year = theYear;
    }

    ParentVehicle.prototype.getInfo = function () {
        return this.make + " - " + this.model + " - " + this.year;
    };

    ParentVehicle.prototype.startEngine = function () {
        return "Vrrmmm....";
    }

    return ParentVehicle;
})();


//now to declare a child class that inherits from ParentVehicle
//using the same pattern to simulate a class, pass the 'parent' keyword to the constructor function
//pass the variable refencing the parent class (ParentVehicle) into the IIFE pattern
var ChildCar = (function (parent) {

    //these lines are where we set up inheritence...
    //first we tell the ChildCar class to create a new instance of ParentVehicle as the prototype ChildCar object
    //Remember that the prototype is the object that is cloned to create the new object
    //After the new ParentVehicle is assigned to the prototype, the constructor of that Vehicle is changed to be the ChildCar constructor
    ChildCar.prototype = new ParentVehicle();
    ChildCar.prototype.constructor = ChildCar;

    //this is the constructor function
    function ChildCar(carMake, carModel, carYear) {
        //use the parent class to modify this new object
        //note - 'this' in parent.call refers to the ChildCar object that has been created and is now being passed to parent to be modified
        parent.call(this, carMake, carModel, carYear);
        this.wheels = 4;
    }

    ChildCar.prototype.getInfo = function () {
        return "Car: " + parent.prototype.getInfo.call(this);
    };

    return ChildCar;
})(ParentVehicle);

//and create another child class Boat
var Boat = (function (parent) {
    Boat.prototype = new ParentVehicle();
    Boat.prototype.constructor = Boat;

    function Boat(boatMake, boatModel, boatYear) {
        parent.call(this, boatMake, boatModel, boatYear);
        this.propellers = 3;
    }

    Boat.prototype.moore = function () {
        return "Safely tied to moorings.";
    };

    Boat.prototype.getInfo = function () {
        return "Boat: " + parent.prototype.getInfo.call(this);
    }

    Boat.prototype.startEngine = function () {
        return "splshblubbberrrrrvvvmvmmmmmrrrmrrmmmm...";
    };

    return Boat;

})(ParentVehicle);