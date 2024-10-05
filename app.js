const express = require('express')
const postsRouter = require('./routes/posts')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use('/posts', postsRouter)

module.exports = app