const request = require('supertest')
const app = require('../app')
const postService = require('../models/services/postService')

jest.mock('../models/services/postService')

describe('routes', () => {
    describe('POST /posts/:username/newPost', () => {
        it('should return 200 and a success message if the request body is valid and the post was successfully written to the database', async () => {
            postService.addPostToDatabase.mockResolvedValueOnce({ msg: 'success' })
            const res = await request(app).post('/posts/bartsimpson/newPost').send({
                text: 'eat my shorts'
            })
            expect(res.statusCode).toEqual(200)
            expect(res._body.message).toEqual('Post successfully added.')
        })
        it('should return 400 and a descriptive error message if the text provided in the request body is falsy', async () => {
            const res = await request(app).post('/posts/totallyrealusername/newPost').send({
                text: ''
            })
            expect(res.statusCode).toEqual(400)
            expect(res._body.message).toEqual('Post body text must be a non-empty string. Please check your inputs.')
        })
        it('should return 400 and a descriptive error message if the text provided in the request body is not a string', async () => {
            const res = await request(app).post('/posts/totallyrealusername/newPost').send({
                text: {}
            })
            expect(res.statusCode).toEqual(400)
            expect(res._body.message).toEqual('Post body text must be a non-empty string. Please check your inputs.')
        })
        it('should return 500 and a descriptive error message if the request body is properly-formatted but an error occurs', async () => {
            postService.addPostToDatabase.mockRejectedValueOnce({ error: 'bad error is bad you guys'})
            const res = await request(app).post('/posts/definitelyrealperson/newPost').send({
                text: 'i am a non empty string'
            })
            expect(res.statusCode).toEqual(500)
            expect(res._body.message).toEqual('An unknown error occurred when creating your post. Please try again later.')
        })
    })
})