class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  cloneCar() {
    const clone = Object.create(Car.prototype);
    const symbols = Object.getOwnPropertySymbols(this);

    symbols.forEach(symbol => {
      const descriptor = Object.getOwnPropertyDescriptor(this, symbol);
      Object.defineProperty(clone, symbol, descriptor);
    });

    return clone;
  }
}

export default Car;

