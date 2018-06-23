const User = require('../models/userModels')

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body)
    const response = await newUser.save()

    res.status(201).json(response)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { createUser }
