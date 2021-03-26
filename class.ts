
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

