const express = require('express');
const app = express();

// Middleware
app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => {
  res.send(`Hello, World!, you have requested for ${req.url}`);
});

app.get(
    '/showmatrixdata/:humanidentifier', (req, res) => {
        const hm = req.params.humanidentifier;
        res.send(`hey matrix admin, please verify your identity to get the details of ${hm}`)
    }
)

app.listen(3000)