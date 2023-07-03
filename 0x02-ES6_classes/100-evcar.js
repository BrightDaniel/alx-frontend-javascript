// 10-car.js

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const constructor = Object.getPrototypeOf(this).constructor;
    return new constructor(this._brand, this._motor, this._color);
  }
}

// 100-evcar.js

import Car from "./10-car.js";

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return super.cloneCar();
  }
}

