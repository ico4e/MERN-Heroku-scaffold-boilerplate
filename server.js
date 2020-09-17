const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/mern-scaffold', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Server on port', PORT);
});
