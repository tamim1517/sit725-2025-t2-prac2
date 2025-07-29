const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from public folder
app.use(express.static('public'));

// Simple GET endpoint to add two numbers
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Please provide two valid numbers in query params: ?num1=10&num2=20');
  }

  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
