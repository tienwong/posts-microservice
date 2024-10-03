const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    numLikes: {
        type: Number,
        required: false,
        default: 0
    },
    numComments: {
        type: Number,
        required: false,
        default: 0
    }
})

module.exports = mongoose.model('Post', postSchema)
