const { addPostToDatabase } = require('./postService')
const PostModel = require('../schemas/Post')

jest.mock('../schemas/Post')

describe('addPostToDatabase', () => {
    const mockPost = {
        username: 'bartsimpson',
        postUUID: 'e458377a-807f-432e-981e-d4f4859e7cb2',
        text: 'eat my shorts',
        numLikes: 0,
        numComments: 0
    }
    it('should return a success message when the write to the database is successful', async () => {
        const mockSave = jest.fn().mockResolvedValueOnce({ msg: 'success' })
        PostModel.prototype.save = mockSave
        const res = await addPostToDatabase(mockPost)
        expect(res).toEqual({ msg: 'success' })
    })
})