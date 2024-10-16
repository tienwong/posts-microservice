const PostModel = require('../schemas/Post')

const addPostToDatabase = async (post) => {
    let result = null
    const newPost = new PostModel({
        ...post
    })
    await newPost.save()
        .then((doc) => {
            console.log(doc)
            result = { post: doc }
        })
        .catch((err) => {
            result = { error: err }
        })
    return result
}

module.exports = { addPostToDatabase }