

const getPostsByUsername = async (username) => {

}

const createNewPost = async (username, text) => {
    if (!username) {
        return 401
    }
    if (!text) {
        return 400
    }
}

const editPost = async (postUuid, text) => {
}

const deletePost = async (postUuid) => {
}

module.exports = {
    getPostsByUsername, createNewPost, editPost, deletePost
}