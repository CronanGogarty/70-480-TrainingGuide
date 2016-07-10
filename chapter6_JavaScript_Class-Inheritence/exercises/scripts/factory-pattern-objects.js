function getVehicle(theYear, theMake, theModel, theColor) {
    var vehicle = new Object();
    vehicle.year = theYear;
    vehicle.make = theMake;
    vehicle.model = theModel;
    vehicle.color = theColor;
    vehicle.getInfo = function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model + ' ' + this.color;
    }
    return vehicle; //remember to return the object - this is what makes the pattern work
};




//var vehicle1 = new Object();
//vehicle1.make = 'Volvo';
//vehicle1.model = '850';
//vehicle1.year = '1999';
//vehicle1.color = 'Wine'

