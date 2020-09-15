const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./user/routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())

//mount routes
app.use('/user', routes)

module.exports = app