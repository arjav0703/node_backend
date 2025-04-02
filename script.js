const express = require('express');
const app = express();


app.use((req, res, next) => {});

app.get('/', (req, res) => {
  res.send(`Hello, World!, you have requested for ${req.url}`);
});

app.listen(3000)