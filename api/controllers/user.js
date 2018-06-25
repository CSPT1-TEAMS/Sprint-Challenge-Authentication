const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  User.create(req.body)
  .then(({ username }) => {
    res.status(201).json({ username });
  })
  .catch(err => res.status(500).json({msg: 'Internal Server Error', err}));
};

module.exports = {
  createUser
};

// - Most of the heavy lifting will be taken care of in our pre save `middleware` that we've already implemented in our `userModel` file.
// - Be sure to follow instructions on creating a user and you should be set
// - **TEST** your `/api/users` _POST_ to ensure you can create a user with an encrypted password.
// - Before moving on make sure you can create a user in the DB with an encrypted pw.
