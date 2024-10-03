const { ERROR_CODES } = require('../utils/constants')

const getPostsByUsername = async (username) => {

}

const createNewPost = async (username, text) => {
    if (!username) {
        return ERROR_CODES.UNAUTHORIZED
    }
    if (!text || typeof username !== 'string' || typeof text !== 'string') {
        return ERROR_CODES.BAD_INPUT
    }
}

const editPost = async (postUuid, text) => {
}

const deletePost = async (postUuid) => {
}

module.exports = {
    getPostsByUsername, createNewPost, editPost, deletePost
}