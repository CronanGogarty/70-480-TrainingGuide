//
/*
    IIFE = Immediately Invoked Function Expresssion
    An IIFE (pronounced iffy) is an anonymous function expression that has a set of parentheses at the end of it, 
    which indicates that you want to execute the function. 
    The anonymous function expression is wrapped in parentheses to tell the JavaScript interpreter that the 
    function isn’t only being defined; it’s also being executed when the file is loaded.

*/

var clsVehicle = (function () {
    function Vehicle(theMake, theModel, theYear) {
        this.make = theMake;
        this.model = theModel;
        this.year = theYear;
    };

    Vehicle.prototype.getAge = function () {
        var currYear = new Date().getFullYear();
        var age = currYear - this.year;
        return age;
    };

    return Vehicle;
})();