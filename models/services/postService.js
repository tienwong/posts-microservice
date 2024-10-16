const PostModel = require('../schemas/Post')

const addPostToDatabase = async (post) => {
    let result = null
    const newPost = new PostModel({
        ...post
    })
    await newPost.save()
        .then((doc) => {
            console.log(doc)
            result = { post: doc, msg: 'Success' }
        })
        .catch((err) => {
            result = { error: err, msg: 'An error occurred writing the new post to the database. Please try again later.'}
        })
    return result
}

module.exports = { addPostToDatabase }