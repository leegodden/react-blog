const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const { User } = require('./models/user');

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('connected to mongo!'))
  .catch((err) => console.error(err));

/// middleware for parsing bodies from URL
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

/// register
app.post('/api/users/register', (req, res) => {
  /// get User model
  const user = new User(req.body);

  user.save((err, userData) => {
    if (err) {
      return res.json({ success: false, err });
    }
  });
  return res.status(200).json({
    success: true
  });
});

app.listen(5000);

/// ON Blog ReactJS NodeJS#8 Register Function using Postman. 8.40
