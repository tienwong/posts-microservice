const { createNewPost, deletePost, editPost, getPostsByUsername } = require('./postControllers')

describe('createNewPost', () => {
    it('Should return status code 401 (unauthorized) when username is not provided', async () => {
        const res = await createNewPost()
        expect(res).toBe(401)
    })
    it('Should return status 400 (bad input) when text is not provided', async () => {
        const res = await createNewPost('bartsimpson99')
        expect(res).toBe(400)
    })
})