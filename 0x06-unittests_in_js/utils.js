// utils.js

const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    // You can add more types if needed (e.g., SUBTRACT, DIVIDE, etc.)
  }
};

module.exports = Utils;
