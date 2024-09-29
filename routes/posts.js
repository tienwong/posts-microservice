const express = require('express')

const postsRouter = express.Router()

postsRouter.get('/:username', (req, res) => {
    res.send('hello from GET /posts/:username')
})

postsRouter.post('/:username/newPost', (req, res) => {
    res.send('hello from POST /posts/:username/newPost')
})

postsRouter.put('/:username/editPost/:postUuid', (req, res) => {
    res.send('hello from POST /posts/:username/edit/:postUuid')
})

postsRouter.delete('/:username/deletePost/:postUuid', (req, res) => {
    res.send('hello from /:username/deletePost/:postUuid')
})

module.exports = postsRouter