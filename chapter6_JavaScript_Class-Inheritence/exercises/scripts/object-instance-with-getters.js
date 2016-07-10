function dreamVehicle(theMake, theModel, theYear) {
    var make = theMake;
    var model = theModel;
    var year = theYear;
    this.getMake = function () { return make; }
    this.getModel = function () { return model; }
    this.getYear = function () { return year;}
}

dreamVehicle.prototype.getInfo = function () {
    return "My dream car = " + this.getMake() + ' ' + this.getModel() + ' ' + this.getYear();
}