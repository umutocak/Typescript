interface Point{
    x: number,
    y:number
}
interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    constructor(private _location?: Point, private _color?: string){ // ? => optional

    }

    // add private properties
    // ---

    travelTo(point: Point): void {
        console.log(`taxsi x : ${this._location.x} Y: ${this._location.y} dan x : ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }

    get location(){
        return this._location;
    }

    set location(value: Point){
        if(value.x<0 || value.y<0) {
            throw new Error('Koordinat bilgileri negatif olamaz');
        }
        this._location = value;
    }
}

let taxi_1: Taxi = new Taxi({x: 2, y: 5},"red");
taxi_1.travelTo({x:1, y:2});
let currentLocaiton = taxi_1.location;
taxi_1.location = ({x: 2, y: 5});


