const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema } = mongoose

const SALT_ROUNDS = 11

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
})

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_ROUNDS)
    .then(hash => {
      this.password = hash
      // console.log('hashed password:', hash)
      next()
    })
    .catch(err => next(err))
})

UserSchema.methods.checkPassword = function (plainTextPW, cb) {
  return bcrypt.compare(plainTextPW, this.password, function (err, match) {
    if (err) return cb(err)
    cb(null, match)
  })
}

module.exports = mongoose.model('User', UserSchema)

// bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
//   bcrypt.hash(this.password, salt)
//     .then(hash => {
//       if (err) throw new Error(err)
//       else this.password = hash
//       return next()
//     })
//     .catch(err => next(err))
// })