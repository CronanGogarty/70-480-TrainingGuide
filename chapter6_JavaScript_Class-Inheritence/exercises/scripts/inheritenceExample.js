var AnimalVar = (function () {
    function Animal(name, classification, sound) {
        this.name = name;
        this.classification = classification;
        this.sound = sound;
    }
    Animal.prototype.getInfo = function () {
        return this.name + "\n" + this.classification;
    };
    Animal.prototype.makeSound = function () {
        return this.sound;
    };
    return Animal;
})();


var CatVar = (function (parent) {

    //now we need to set up the inheritence
    //we do so by changing the Cat prototype object to be a new Animal object
    //so instead of the  default prototype of type 'Object', the Cat object now has a prototype object of type 'Animal'
    Cat.prototype = new AnimalVar();
    //now we change the constructor to Cat
    Cat.prototype.constructor = Cat;

    function Cat(name, classification, sound) {
        //notice the use of the "call" method to modify the "this" object
        //the 'this' object in this instance is the Cat object
        //the 'call' to the parent constructor function will create the members on the Cat object
        parent.call(this, name, classification, sound);

        //now with the members that are common to the parent and child objects, we can create members that are exclusive to the child
        this.owner = "Lonely woman";
        this.toys = "Ball of wool";
    }

    Cat.prototype.getInfo = function () {
        return parent.prototype.getInfo.call(this) + "\n" + this.toys + "\n" + this.owner;
    }
    return Cat;
})(AnimalVar);