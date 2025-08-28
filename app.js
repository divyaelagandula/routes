const express = require('express');
const app = express();
const port = 3000;

app.get('/Welcome/:username', (req, res) => {
  const uname=req.params.username
  const role=req.query.role
  res.send(`Welcome ${uname}, your role is ${role}`);
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
