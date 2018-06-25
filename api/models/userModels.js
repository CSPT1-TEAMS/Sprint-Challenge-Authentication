const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const createUser = require('../controllers/user')

const SALT_ROUNDS = 11

const UserSchema = Schema({
  // create your user schema here.
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 4 // make this at least 12 in production
  }
})

UserSchema.pre('save', function (next) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // if there is an error here you'll need to handle it by calling next(err)
  return bcrypt
    .hash(this.password, SALT_ROUNDS)
    .then(hash => {
      this.password = hash
      // Once the password is encrypted, call next() so that your userController can create a user
      return next({createUser})
    })
    .catch(err => {
      return next(err)
    })
})

UserSchema.methods.checkPassword = function (plainTextPW, callBack) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this method in with the Proper password comparing, bcrypt.compare()
  // Your controller will be responsible for sending the information here for password comparison
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function

  // if you're really stuck with this at this point, you can reference this document.
// https://github.com/LambdaSchool/Auth-JWT/blob/master/models/index.js This is what we're going for here.

  bcrypt.compare(plainTextPW, this.password, (err, goodPW) => {
    if (err) {
      return callBack(err)
    }
    return callBack(null, goodPW)
  })
}

module.exports = mongoose.model('./api/controllers/User', UserSchema)
