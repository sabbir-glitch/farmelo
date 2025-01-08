const express = require('express');
const app = express();
const port = 3000; // You can choose any port you like

app.get('/', (req, res) => {
  res.send('Farmelo backend is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});