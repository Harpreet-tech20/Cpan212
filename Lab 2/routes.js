
const express = require('express');
const router = express.Router();


router.get('/name', (req, res) => {
  res.send('Harpreet Kaur');
});


router.get('/greeting', (req, res) => {
  res.send('Name: Harpreet Kaur, Student Number: N01684463');
});


router.get('/add', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);

  if (isNaN(x) || isNaN(y)) {
    return res.send('Invalid query parameters.');
  }

  res.send(`Result: ${x + y}`);
});


router.get('/calculate', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const operation = req.query.operation;

  if (isNaN(a) || isNaN(b) || !operation) {
    return res.send('Invalid query parameters.');
  }

  let result;

  switch (operation) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Cannot divide by zero'; break;
    case '**': result = a ** b; break;
    default: return res.send('Invalid operation');
  }

  res.send(`Result: ${result}`);
});

module.exports = router;
