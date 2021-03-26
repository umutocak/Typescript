interface Point{
    x: number,
    y:number
}
interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    // add private properties
    // ---
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taxsi x : ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

class Bus implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`otobus x : ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({x:1, y:2});
taxi_1.currentLocation = {x: 2, y: 5};

let taxi_2 = new Taxi();
taxi_2.travelTo({ x: 2, y: 5});
taxi_2.currentLocation = {x:2, y:5};

let bus_1 = new Bus();
bus_1.travelTo({x:7, y:25});
bus_1.currentLocation = ({ x:7, y:22 });
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);



