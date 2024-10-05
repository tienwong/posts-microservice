const { STATUS_CODES } = require('../utils/constants')
const { randomUUID } = require('crypto')
const { addPostToDatabase } = require('../models/services/postService')

const getPostsByUsername = async (username) => {

}

const createNewPost = async (username, text) => {
    // Username will always be truthy and a string because it comes from the URI of the POST endpoint that calls this method
    if (!text || typeof text !== 'string') {
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
        return STATUS_CODES.SERVER_ERROR
    }
}

const editPost = async (postUuid, text) => {
}

const deletePost = async (postUuid) => {
}

module.exports = {
    getPostsByUsername, createNewPost, editPost, deletePost
}