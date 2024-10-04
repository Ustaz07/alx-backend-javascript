const chai = require('chai');
const request = require('request');
const app = require('./api');
const { expect } = chai;

describe('Index page', () => {
  // Test the status code
  it('should return status code 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Test the result message
  it('should return the correct message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Additional test cases can be added here
});
