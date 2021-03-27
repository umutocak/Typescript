import  { Taxi } from './taxi';




let taxi_1: Taxi = new Taxi({x: 2, y: 5},"red");
taxi_1.travelTo({x:1, y:2});
let currentLocaiton = taxi_1.location;
taxi_1.location = ({x: 2, y: 5});


