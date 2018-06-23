const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema } = mongoose

const UserSchema = new Schema({
  username: {
    lowercase: true,
    required: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String
  }
})

UserSchema.pre('save', async function(next) {
  try {
    const hashed = await bcrypt.hash(this.password, 11)
    this.password = hashed
    next()
  } catch (err) {
    next(err)
  }
})

UserSchema.methods.checkPassword = async function(plainTextPW, callBack) {
  try {
    const confirmation = await bcrypt.compare(plainTextPW, this.password)
    callBack(null, confirmation)
  } catch (err) {
    callBack(err)
  }
}

module.exports = mongoose.model('User', UserSchema)
