const express = require('express')
const { createNewPost } = require('../controllers/postControllers')

const postsRouter = express.Router()

postsRouter.get('/:username', async (req, res) => {
    res.send('hello from GET /posts/:username')
})

postsRouter.post('/:username/newPost', async (req, res) => {
    const statusCode = await createNewPost(req.params.username, req.body.text)
    let message = null
    if (statusCode === 200) {
        message = 'Post successfully added.'
    } else if (statusCode === 400) {
        message = 'Post body text must be a non-empty string. Please check your inputs.'
    } else {
        message = 'An unknown error occurred when creating your post. Please try again later.'
    }
    res.status(statusCode).json({
        message
    })
})

postsRouter.put('/:username/editPost/:postUuid', (req, res) => {
    res.send('hello from POST /posts/:username/edit/:postUuid')
})

postsRouter.delete('/:username/deletePost/:postUuid', (req, res) => {
    res.send('hello from /:username/deletePost/:postUuid')
})

module.exports = postsRouter