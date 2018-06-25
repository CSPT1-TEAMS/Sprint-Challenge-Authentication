const User = require('../models/userModels')
const bcrypt = require('bcrypt')
const { userSchema } = require('../models/usermodels')

// create user takes in the username and password and saves a user.
const createUser = (req, res) => {
  const { username, password } = req.body

  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  return ({ userSchema }.pre, username, password)
}

module.exports = {
  createUser
}
