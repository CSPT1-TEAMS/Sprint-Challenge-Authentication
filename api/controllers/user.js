const User = require('../models/userModels')
// const bcrypt = require('bcrypt')
// const { userSchema } = require('../models/usermodels')

// create user takes in the username and password and saves a user.
const createUser = (req, res) => {
  const { username, password } = req.body

  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const user = new User({username, password})
  user.save()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

module.exports = {
  createUser
}
