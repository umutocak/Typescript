var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxsi x : " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otobus x : " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 2, y: 5 };
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 2, y: 5 });
taxi_2.currentLocation = { x: 2, y: 5 };
var bus_1 = new Bus();
bus_1.travelTo({ x: 7, y: 25 });
bus_1.currentLocation = ({ x: 7, y: 22 });
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
