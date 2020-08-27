const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://rifkijones:creatures01@cluster0.qxstc.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('connected to mongo!'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(4000);
