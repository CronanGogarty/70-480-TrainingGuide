function Person(theName, theAge, theGender) {
    var name = theName;
    var age = theAge;
    var gender = theGender;

    this.getPerson = function () {
        return "Person: " + name + " " + age + " " + gender
    };
}
