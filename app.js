const express = require('express')
const postsRouter = require('./routes/posts')

const app = express()

app.use('/posts', postsRouter)

module.exports = app