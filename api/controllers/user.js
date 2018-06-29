const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  User.create(req.body)
    .then(({ username }) => {
      res.status(201).json({ username });
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error!" });
    })
};

module.exports = {
  createUser
};
