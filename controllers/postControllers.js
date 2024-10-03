const { STATUS_CODES } = require('../utils/constants')
const { randomUUID } = require('crypto')
const { addPostToDatabase } = require('../models/services/postService')

const getPostsByUsername = async (username) => {

}

const createNewPost = async (username, text) => {
    if (!username) {
        return STATUS_CODES.ERROR_UNAUTHORIZED
    }
    if (!text || typeof username !== 'string' || typeof text !== 'string') {
        return STATUS_CODES.ERROR_BAD_INPUT
    }
    const newPost = {
        username,
        text,
        postUUID: randomUUID(),
        numLikes: 0,
        numComments: 0
    }
    try {
        await addPostToDatabase(newPost)
        return STATUS_CODES.SUCCESS
    } catch (err) {
    }
}

const editPost = async (postUuid, text) => {
}

const deletePost = async (postUuid) => {
}

module.exports = {
    getPostsByUsername, createNewPost, editPost, deletePost
}