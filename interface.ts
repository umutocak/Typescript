
interface Point{
    x: number,
    y:number
}
interface Passenger {
    name: string;
    phone: string;
}
interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger): void;
}
// travelTo({
//     x: 1,
//     y: 2
// });