const { createNewPost, deletePost, editPost, getPostsByUsername } = require('./postControllers')

describe('createNewPost', () => {
    it('Should return status code 401 (unauthorized) when username is not provided', async () => {
        const res = await createNewPost()
        expect(res).toBe(401)
    })
})