/* eslint-disable no-underscore-dangle */
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand = '', motor = '', color = '', range = '') {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    // Use the Symbol.species to create an instance of Car
    return new this[Symbol.species](this._brand, this._motor, this._color);
  }
}
