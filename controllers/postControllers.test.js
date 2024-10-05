const postService = require('../models/services/postService')
const { createNewPost, deletePost, editPost, getPostsByUsername } = require('./postControllers')

jest.mock('../models/services/postService')

describe('createNewPost', () => {
    afterEach(() => {
        jest.resetAllMocks()
    })
    it('Should return status code 401 (unauthorized) and not call the service layer when username is not provided', async () => {
        const serviceLayer = jest.spyOn(postService, 'addPostToDatabase')
        const result = await createNewPost()
        expect(result).toBe(401)
        expect(serviceLayer).not.toHaveBeenCalled()
    })
    it('Should return status 400 (bad input) and not call the service layer when text is not provided', async () => {
        const serviceLayer = jest.spyOn(postService, 'addPostToDatabase')
        const result = await createNewPost('bartsimpson99')
        expect(result).toBe(400)
        expect(serviceLayer).not.toHaveBeenCalled()
    })
    it('Should return status 400 and not call the service layer when username is not a string', async () => {
        const serviceLayer = jest.spyOn(postService, 'addPostToDatabase')
        const result = await createNewPost({}, 'i just took a shower')
        expect(result).toBe(400)
        expect(serviceLayer).not.toHaveBeenCalled()
    })
    it('Should return status 400 and not call the service layer when text is not a string', async () => {
        const serviceLayer = jest.spyOn(postService, 'addPostToDatabase')
        const result = await createNewPost('notnedflanders', {})
        expect(result).toBe(400)
        expect(serviceLayer).not.toHaveBeenCalled()
    })
    it('Should create a new post and try to write it to the database when valid username and text are provided', async () => {
        const databaseWriteFunction = jest.spyOn(postService, 'addPostToDatabase')
        await createNewPost('fanfiction_ned_flanders', 'well howdy, postverse!')
        expect(databaseWriteFunction).toHaveBeenCalled()
    })
    it('Should return status code 200 (success) when the database write succeeds', async () => {
        // TODO: Change this to the actual success message once I actually implement the service layer
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