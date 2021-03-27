import { Vehicle } from './Vehicle';
import { Point} from './Point';

export class Taxi implements Vehicle {
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