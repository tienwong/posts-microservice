const express = require('express')
const { createNewPost } = require('../controllers/postControllers')

const postsRouter = express.Router()

postsRouter.get('/:username', async (req, res) => {
    res.send('hello from GET /posts/:username')
})

postsRouter.post('/:username/newPost', async (req, res) => {
    const statusCode = await createNewPost(req.params.username, req.body.text)
    if (statusCode === 200) {
        res.status(statusCode).json({
            message: 'Post successfully added.'
        })
    }
})

postsRouter.put('/:username/editPost/:postUuid', (req, res) => {
    res.send('hello from POST /posts/:username/edit/:postUuid')
})

postsRouter.delete('/:username/deletePost/:postUuid', (req, res) => {
    res.send('hello from /:username/deletePost/:postUuid')
})

module.exports = postsRouter