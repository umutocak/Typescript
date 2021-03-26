var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    // add private properties
    // ---
    Taxi.prototype.travelTo = function (point) {
        console.log("taxsi x : " + this.location.x + " Y: " + this.location.y + " dan x : " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 }, "red");
taxi_1.travelTo({ x: 1, y: 2 });
