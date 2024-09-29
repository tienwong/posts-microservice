const mongoose = require('mongoose')

const getPostsByUsername = (username) => {
    let result = null
    if (!username) {
        return result
    }
}

const createNewPost = (username, text) => {
    let result = null
    if (!username || !text) {
        return result
    }
    return result
}

const editPost = (postUuid) => {
    let result = null
    if (!postUuid) {
        return result
    }
    return result
}

const deletePost = (postUuid) => {
    let result = null
    if (!postUuid) {
        return result
    }
    return result
}

module.exports = {
    getPostsByUsername, createNewPost, editPost, deletePost
}