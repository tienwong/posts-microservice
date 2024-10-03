const mongoose = require('mongoose')
const postModel = require('../schemas/Post')

const addPostToDatabase = async (post) => {
    console.log('inside addPostToDatabase')
}

module.exports = { addPostToDatabase }