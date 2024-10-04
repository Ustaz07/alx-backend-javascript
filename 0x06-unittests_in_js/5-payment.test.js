import sendPaymentRequestToAPI from './5-payment';

describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should log the total when called with 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleSpy).toHaveBeenCalledWith('The total is: 120');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  test('should log the total when called with 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(consoleSpy).toHaveBeenCalledWith('The total is: 20');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
