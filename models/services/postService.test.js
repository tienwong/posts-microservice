const { addPostToDatabase } = require('./postService')
const PostModel = require('../schemas/Post')

jest.mock('../schemas/Post')

describe('service layer', () => {
    describe('addPostToDatabase', () => {
        const mockPost = {
            username: 'bartsimpson',
            postUUID: 'e458377a-807f-432e-981e-d4f4859e7cb2',
            text: 'eat my shorts',
            numLikes: 0,
            numComments: 0
        }
        const mockMongoDocument = {
            ...mockPost,
            _id: 'new ObjectId(\'670f0aace87a83630543c8d8\')',
            __v: 0
        }
        it('should return the post and a success message when the write to the database is successful', async () => {
            const mockSave = jest.fn().mockResolvedValueOnce(mockMongoDocument)
            PostModel.prototype.save = mockSave
            const res = await addPostToDatabase(mockPost)
            expect(res).toMatchObject({ post: {...mockMongoDocument } })
        })
        it('should return an error message if an error occurs when trying to write to the database', async () => {
            const mockError = { error: 'Something went wrong' }
            const mockSave = jest.fn().mockRejectedValueOnce(mockError)
            PostModel.prototype.save = mockSave
            const res = await addPostToDatabase(mockPost)
            expect(res).toMatchObject({ error: {...mockError} })
        })
    })
})