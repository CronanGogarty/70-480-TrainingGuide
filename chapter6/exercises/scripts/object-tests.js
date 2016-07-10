test('Player name test', function () {
    expect(1);
    expected = "Ratboy";
    actual = player1.getName();

    equal(actual, expected, "Expected result: " + expected + " - Actual result: " + actual);
});

test('Player skills test', function () {
    expect(1);
    expected = 'spin,catch,speed';
    actual = player1.getSkills().join();

    equal(actual, expected, "Expected result: " + expected + " - Actual result: " + actual);
});

test('Factory Pattern Object Exists?', function () {
    expect(2);
    var vehicle1 = getVehicle('1999', 'Volvo', '850', 'Wine');
    expected = 'Vehicle: 1999 Volvo 850 Wine';
    actual = vehicle1.getInfo();

    equal(actual, expected, "Expected result: " + expected + " - Actual result: " + actual);

    var car = getVehicle('1997', 'Peugeot', '306');
    //var make = car.make;
    expected = 'Peugeot';
    actual = car.make;

    equal(actual, expected, "Expected result: " + expected + " - Actual result: " + actual);
});

test('Class simulation', function () {
    expect(1);
    var a1 = new Person("Andréas Gogarty", "37", "Male");
    expected = "Person: Andréas Gogarty 37 Male";
    actual = a1.getPerson();

    equal(actual, expected, "Expected result: " + expected + " - Actual result: " + actual);

});

test('Prototype property tests', function () {
    expect(5);
    var car1 = new Vehicle(1999, "Volvo", 850);
    expected = "Vehicle: 1999 Volvo 850";
    actual = car1.getInfo();
    equal(actual, expected, "Expected result: " + expected + " - Actual result: " + actual)

    var car2 = new Vehicle(2003, "Volvo", "S60");
    expected = "Vehicle: 2003 Volvo S60";
    actual = car2.getInfo();
    equal(actual, expected, "Expected result: " + expected + " - Actual result: " + actual)

    Vehicle.prototype.getInfo = function () { return "Broccoli yum!" };
    expected = "Broccoli yum!";
    actual = car2.getInfo();
    equal(actual, expected, "Expected result: " + expected + " - Actual result: " + actual)

    expected = "Broccoli yum!";
    actual = car1.getInfo();
    equal(actual, expected, "Expected result: " + expected + " - Actual result: " + actual)

    expected = "Volvo";
    actual = car1.make;
    equal(actual, expected, "Expected result: " + expected + " - Actual result: " + actual)
})

test("Object instance with getters", function () {
    expect(2);
    var volvos60 = new dreamVehicle("Volvo", "S60", "2005");
    expected = "My dream car = Volvo S60 2005";
    actual = volvos60.getInfo();
    equal(actual, expected, "Expected result = " + expected + " :: Actual result = " + actual)
    dreamVehicle.prototype.getInfo = function () { return "I would also like a Mazda MX-5" };
    expected = "I would also like a Mazda MX-5";
    actual = volvos60.getInfo();
    equal(actual, expected, "Expected result  = " + expected + " :: Actual result = " + actual);
})

test("IIFE object class pattern", function () {
    expect(1);
    var myCar = new clsVehicle('Mazda', 'MX-5', '2010');
    expected = (new Date().getFullYear()) - 2010;
    actual = myCar.getAge();
    equal(actual,expected, "Expected Result = " + expected + " :: Actual Result = " + actual)
});

//test the namespace created in the .js file
test("Namespace Creation Test", function () {
    expect(2);
    var expected = "Aircraft Carrier - Battleship - Cruiser - Destroyer - Submarine";
    var actual = BattleShips.getShips();
    equal(actual, expected, "Expected Result: " + expected + ":: Actual Result: " + actual);
    var expected = 0.99;
    var actual = BattleShips.Billing.Invoice();
    equal(actual, expected, "Expected Result: " + expected + " :: Actual Result: " + actual);
});

//test object inheritence as it is implemented in JavaScript
test("JavaScript Object Inheritence", function () {
    expect(5);
    var expected = "Volvo - S60R - 2006";
    var volvo = new ParentVehicle('Volvo', 'S60R', '2006');
    var actual = volvo.getInfo();
    equal(actual, expected, "Expected Result: " + expected + " :: Actual Result: " + actual);
    expected = 4;
    var mazda = new ChildCar('Mazda', 'MX-5', '2015');
    actual = mazda.wheels;
    equal(actual, expected, "Expected Result: " + expected + " :: Actual Result: " + actual);
    var mazda = new ChildCar('Mazda', 'MX-5', '2015');
    expected = "Vrrmmm....";
    actual = mazda.startEngine();
    equal(actual, expected, "Expected Result: " + expected + " :: Actual Result: " + actual);
    expected = "Car: Mazda - MX-5 - 2015";
    actual = mazda.getInfo();
    equal(actual, expected, "Expected Result: " + expected + " :: Actual Result: " + actual);
    var myBoat = new Boat('Viking', 'LongShip', '1612');
    expected = "Boat: Viking - LongShip - 1612";
    actual = myBoat.getInfo();
    equal(actual, expected, "Expected Result: " + expected + " :: Actual Result: " + actual);
    console.log(myBoat.startEngine());
    console.log(myBoat.moore());
});
