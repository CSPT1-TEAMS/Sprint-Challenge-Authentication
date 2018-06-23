const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },

    password: {
      type: String,
      require: true
    }

});

UserSchema.pre('save', function(next) {
  hashedPassword = bcrypt.hash(this.password, SALT_ROUNDS) 
    .then((hashedPassword) => {
      this.password = hashedPassword
      next()
    })
    .catch((error) => {
      console.log('error', error)
      next(error)
    })
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // if there is an error here you'll need to handle it by calling next(err);
  // Once the password is encrypted, call next() so that your userController and create a user
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
   bcrypt.compare(plainTextPW, this.password, (err, isMatch) => {
     if(err) return callBack(err)
     callBack(null, isMatch)
   })
  
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this method in with the Proper password comparing, bcrypt.compare()
  // Your controller will be responsible for sending the information here for password comparison
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
};

module.exports = mongoose.model('User', UserSchema);
