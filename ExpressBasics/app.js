const express = require('express');
const app = express();
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(
    (`
      <html>
        <head>
          <title>My site</title>
        </head>
        <body>
          <h1>Hello World</h1>
        </body>
      </html>
    `)
  );
});

app.get('/cars', (req, res) => {
  res.send(`cars`);
});

app.get('/trucks', (req, res) => {
  res.send(`trucks`);
});