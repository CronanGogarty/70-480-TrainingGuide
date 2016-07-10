
(function () {
    //using an IIFE (Immediately Invoked Function Expression) to automatically create a namespace
    //first use the singleton pattern to create the 'BattleShips' namespace if it does not exist
    //use the 'ns' var as shorthand for 'this.BattleShips'
    this.BattleShips = this.BattleShips || {};
    var ns = this.BattleShips;

    var playerCount = 2;
    var playerShipsCount = 5;
    var ships = ['Aircraft Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Cruiser'].sort();

    ns.getShips = function() {
        return ships.join(' - ');
    };

    //create a sub-namespace to create a namespace heirarchy
    ns.Billing = ns.Billing || {};
    var monthlySubscription = 0.99;
    ns.Billing.Invoice = function () {
        console.log("Pay Monthly Subscription fee...");
        return monthlySubscription;
    }
}());
