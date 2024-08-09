/* eslint-disable no-underscore-dangle */

// Create a symbol to ensure uniqueness
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car instance
  cloneCar() {
    // Create a new instance using the constructor and pass the current attributes
    const newCar = new this.constructor(this._brand, this._motor, this._color);
    // Add the unique symbol property
    newCar[cloneSymbol] = true;
    return newCar;
  }
}
