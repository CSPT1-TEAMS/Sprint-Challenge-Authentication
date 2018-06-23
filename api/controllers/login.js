const jwt = require('jsonwebtoken')
const { mysecret } = require('../../config')
const User = require('../models/userModels')

const login = async ({ body: { username, password } }, res) => {
  try {
    const user = await User.findOne({ username })
    if (!user) return res.status(422).json({ error: 'No user with that username in our DB' })

    user.checkPassword(password, (err, match) => {
      if (err) return res.status(500).json({ message: err.message })
      if (match) {
        const token = jwt.sign({ username, password }, mysecret)
        res.json({ token })
      } else {
        res.status(422).json({ error: 'passwords dont match' })
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { login }
