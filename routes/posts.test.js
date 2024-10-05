const request = require('supertest')
const app = require('../app')
const postService = require('../models/services/postService')

jest.mock('../models/services/postService')

describe('POST /posts/:username/newPost', () => {
    it('should return 200 and a success message if the request body is valid and the post was successfully written to the database', async () => {
        postService.addPostToDatabase.mockResolvedValueOnce({ msg: 'success' })
        const res = await request(app).post('/posts/bartsimpson/newPost').send({
            text: 'eat my shorts'
        })
        expect(res.statusCode).toEqual(200)
        expect(res._body.message).toEqual('Post successfully added.')
    })
})