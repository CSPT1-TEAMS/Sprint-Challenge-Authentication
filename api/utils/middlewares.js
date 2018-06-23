const jwt = require('jsonwebtoken')
const { mysecret } = require('../../config')

const authenticate = (req, res, next) => {
  const token = req.get('Authorization')
  if (!token)
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header'
    })

  jwt.verify(token, mysecret, (err, decoded) => {
    if (err) return res.status(422).json(err)
    req.decoded = decoded
    next()
  })
}

module.exports = { authenticate }
