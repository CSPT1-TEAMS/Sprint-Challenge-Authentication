const express = require('express')

const routes = require('./api/routes/routes')

const server = express()

server.use(express.json())

routes(server)

module.exports = { server }
