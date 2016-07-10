var ClassHolder = (function () {
    function Class(arg1, arg2) {
        this._arg1 = arg1;
        this._arg2 = arg2;
    }

    Class.prototype.getInfo = function () {
        return this._arg1 + this._arg2;
    };

    Class.prototype.accellerate = function () {
        return "Getting faster.....";
    };
    return Class;
})();





