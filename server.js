const express = require('express')
const cors = require('cors')

const routes = require('./api/routes/routes')

const server = express()

server.use(express.json())
server.use(cors())

routes(server)

module.exports = { server }
