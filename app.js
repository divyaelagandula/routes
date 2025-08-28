const express = require('express');
const app = express();
const productroutes = require('./routes/products');
const categorieroutes = require('./routes/categories');

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.use('/products', productroutes);
app.use('/categories', categorieroutes);

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
