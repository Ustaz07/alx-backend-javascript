const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let stub, consoleSpy;

  beforeEach(() => {
    // Stub the calculateNumber function to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log to verify the output message
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy after each test
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments and return 10', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub is called with 'SUM', 100, and 20
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
