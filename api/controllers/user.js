const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const jwt = require('jsonwebtoken');


router.post('/') , createUser = (req, res) => {
  const { username, password } = req.body;
    User.create(req.body)
    .then((user ) => res.status(201).json({ msg: 'user created!', username }))
    .catch(err => res.status(500).send(err))

  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
    };

module.exports = {
  createUser
};
