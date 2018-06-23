const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  username:{
    type:String,required:true,unique:true
  },
  password:{
    type:String,required:true
  }
  // create your user schema here.
  // username: required, unique and lowercase
  // password: required
});

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password,SALT_ROUNDS,(err,hash) => {
    if (err){
      next(err)
    }
    this.password = hash
    next()
  })
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  return bcrypt.compare(plainTextPW,this.password,callBack)
};

module.exports = mongoose.model('User', UserSchema);
 