const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hi salva');
});

const PORT = process.env.PORT || 4000;
