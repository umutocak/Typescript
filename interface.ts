
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
// taxi-1 => 2323 abc 213
// taxi_1.currentLocaiton =>
// taxi_1.travelTo()