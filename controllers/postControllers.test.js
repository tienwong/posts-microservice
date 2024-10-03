const postService = require('../models/services/postService')
const { createNewPost, deletePost, editPost, getPostsByUsername } = require('./postControllers')

jest.mock('../models/services/postService')

describe('createNewPost', () => {
    it('Should return status code 401 (unauthorized) when username is not provided', async () => {
        const result = await createNewPost()
        expect(result).toBe(401)
    })
    it('Should return status 400 (bad input) when text is not provided', async () => {
        const result = await createNewPost('bartsimpson99')
        expect(result).toBe(400)
    })
    it('Should return status 400 when username is not a string', async () => {
        const result = await createNewPost({}, 'i just took a shower')
        expect(result).toBe(400)
    })
    it('Should return status 400 when text is not a string', async () => {
        const result = await createNewPost('notnedflanders', {})
        expect(result).toBe(400)
    })
    it('Should create a new post and try to write it to the database when valid username and text are provided', async () => {
        const databaseLogic = jest.spyOn(postService, 'addPostToDatabase')
        await createNewPost('fanfiction_ned_flanders', 'well howdy, postverse!')
        expect(databaseLogic).toHaveBeenCalled()
    })
    it('Should return status code 200 (success) when the database write succeeds', async () => {
        postService.addPostToDatabase.mockResolvedValueOnce({ msg: 'success' })
        const result = await createNewPost('fanfiction_ned_flanders', 'well howdy, postverse!')
        expect(result).toBe(200)
    })
    it('Should return 500 (internal server error) when the database write fails', async () => {
        postService.addPostToDatabase.mockRejectedValueOnce({ error: 'Some error'})
        const result = await createNewPost('nothomersimpson', 'd\'oh!')
        expect(result).toBe(500)
    })
})