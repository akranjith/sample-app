const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Docker + Jenkins CI/CD and awesome !');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
