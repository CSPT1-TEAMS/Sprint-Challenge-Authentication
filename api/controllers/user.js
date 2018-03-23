const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const user = new User({ username, password });
  User.save(user, (err, savedUser) => {
    if (err) {
      res.status(500);
      res.json({ error: 'Error saving new user'} );
      return;
    }
    res.status(200);
    res.json(savedUser);
  });
};

module.exports = {
  createUser
};
