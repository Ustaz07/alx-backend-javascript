/* eslint-disable no-underscore-dangle */
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    // Create a new instance of Car instead of EVCar
    const newCar = new Car(this._brand, this._motor, this._color);
    return newCar;
  }
}
