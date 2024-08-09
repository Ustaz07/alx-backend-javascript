/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Handle casting to Number
  valueOf() {
    return this._size;
  }

  // Handle casting to String
  toString() {
    return this._location;
  }
}
