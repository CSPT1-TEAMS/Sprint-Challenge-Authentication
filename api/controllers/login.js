const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid Username/Password' });
    }
    if (user === null) {
      return res.status(422).json({ error: 'No user with that username in our DB' });
    }
    user.checkPassword(password, (error, response) => {
      if (error) return res.status(500).json({ message: err.message });
      if (response) {
        const token = jwt.sign({ username: user.username }, mysecret);
        res.json({ token });
      } else {
        res.status(422).json({ error: 'passwords dont match' });
      }
    });
  });
};

module.exports = {
  login
};
