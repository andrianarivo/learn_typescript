"use strict";
class RocketFactory {
    constructor(price, fuelType, reactors, vMax) {
        this.price = price;
        this.fuelType = fuelType;
        this.reactors = reactors;
        this.vMax = vMax;
    }
    takeOff(action) {
        console.log(action);
    }
}
const Falcon1 = new RocketFactory(1000000, 'kerosene', 1, 1000);
console.log(Falcon1);
Falcon1.takeOff('Go !');
