const express = require('express');
const app = express();

// Route for the root ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start server on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
