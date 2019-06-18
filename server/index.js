const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const server = express()

const authRouter = require('./auth')

server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())

server.use('/auth', authRouter)

module.exports = server
