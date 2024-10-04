const request = require("request");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("Index page", function() {
  const options = {
    url: "http://localhost:7865/",
    method: "GET"
  };

  it("should return status code 200", function(done) {
    request(options, function(err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return correct content", function(done) {
    request(options, function(err, res, body) {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("Cart page", function() {
  const validCartUrl = "http://localhost:7865/cart/12";
  const invalidCartUrl = "http://localhost:7865/cart/kim";

  it("should return status code 200 for a valid cart ID", function(done) {
    request.get(validCartUrl, function(err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return correct content for a valid cart ID", function(done) {
    request.get(validCartUrl, function(err, res, body) {
      expect(body).to.equal("Payment methods for cart 12");
      done();
    });
  });

  it("should return status code 404 for an invalid cart ID", function(done) {
    request.get(invalidCartUrl, function(err, res) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe("Available payments page", function() {
  const paymentsUrl = "http://localhost:7865/available_payments";

  it("should return status code 200", function(done) {
    request.get(paymentsUrl, function(err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return correct payment methods", function(done) {
    const expectedResponse = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };

    request.get({ url: paymentsUrl, json: true }, function(err, res, body) {
      expect(body).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe("Login", function() {
  const loginUrl = "http://localhost:7865/login";

  it("should return status code 200 for valid login request", function(done) {
    const validRequest = {
      url: loginUrl,
      json: true,
      body: {
        userName: "JOE"
      }
    };

    request.post(validRequest, function(err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return correct content for valid login request", function(done) {
    const validRequest = {
      url: loginUrl,
      json: true,
      body: {
        userName: "JOE"
      }
    };

    request.post(validRequest, function(err, res, body) {
      expect(body).to.equal("Welcome JOE");
      done();
    });
  });

  it("should return status code 400 for invalid login request", function(done) {
    const invalidRequest = {
      url: loginUrl,
      json: true,
      body: {
        usame: "JOE" // Incorrect field name
      }
    };

    request.post(invalidRequest, function(err, res) {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });
});
