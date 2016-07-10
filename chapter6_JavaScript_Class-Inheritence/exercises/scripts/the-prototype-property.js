function Vehicle(theYear, theMake, theModel) {
    this.year = theYear;
    this.make = theMake;
    this.model = theModel;
}

Vehicle.prototype.getInfo = function () {
    return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
};
