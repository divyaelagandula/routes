const express = require('express');
const app = express();
const bookroutes = require('./b_routes/book');


app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.use('/books', bookroutes);


app.listen(3000, () => {
  console.log('server is running on port 3000');
});
