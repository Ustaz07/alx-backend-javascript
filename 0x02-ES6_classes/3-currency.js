/* eslint-disable no-underscore-dangle */

export default class Currency {
  constructor(code, name) {
    // Validate input types
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    // Assign the validated values to underscore-prefixed properties
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code with type validation
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with type validation
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
