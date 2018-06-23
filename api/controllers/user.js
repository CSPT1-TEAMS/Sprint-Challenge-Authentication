const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res, error) => {
  // const { username, password } = req.body;
  const newUser = new User(req.body)
    .save()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      res.status(500).json(error)
    })
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
};

module.exports = {
  createUser
};
