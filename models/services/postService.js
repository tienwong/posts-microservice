const PostModel = require('../schemas/Post')

const addPostToDatabase = async (post) => {
    let result = null
    const newPost = new PostModel({
        ...post
    })
    await newPost.save()
        .then((doc) => {
            result = { msg: 'success' }
        })
        .catch((err) => {
            result = err
        })
    return result
}

module.exports = { addPostToDatabase }