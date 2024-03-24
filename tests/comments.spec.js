const commentModel = require('../models/commentModel');
const { createNewComment, getCommentWithProducId, getCommentWithcontent, getAllComments, updateComment, deleteComment } = require('../controllers/commentController');

jest.mock('../models/commentModel')

describe('Comments', () => {
    it('Creates a new comment successfully with valid data', async () => {
        // Mock request and response objects
        const req = {
            body: { content: 'This is a test comment', 
            user_id: '65a52d96361bd1b767103a9e',
            product_id: '65a52d96361bd1b767103a9e' }
        };
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };
    
        // Mock comment model's create method
        const createdComment = { _id: 'mockCommentId', content: 'This is a test comment' };
        commentModel.create = jest.fn().mockResolvedValueOnce(createdComment);
    
        // Call the createNewComment function
        await createNewComment(req, res);
    
        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'comment created successfully', Comment: createdComment });
    });


    it('Retrieves comments associated with a valid product ID', async () => {
        // Mock request and response objects
        const req = {
            params: { id: 'validProductId' }
        };
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock comments data
        const mockComments = [{ _id: 'comment1Id', text: 'Comment 1', product_id: 'validProductId' }, { _id: 'comment2Id', text: 'Comment 2', product_id: 'validProductId' }];

        // Mock comment model's find method
        commentModel.find = jest.fn().mockReturnValueOnce({
            populate: jest.fn().mockReturnValueOnce({
                sort: jest.fn().mockResolvedValueOnce(mockComments)
            })
        });

        // Call the getCommentWithProducId function
        await getCommentWithProducId(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'Comment found successfully', data: mockComments });
    });


    it('Retrieves comments containing valid content', async () => {
        // Mock request and response objects
        const req = {
            query: { content: 'validContent' }
        };
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock comments data
        const mockComments = [{ _id: 'comment1Id', content: 'This is a valid comment', user_id: 'userId1', created_at: new Date() }, { _id: 'comment2Id', content: 'Another valid comment', user_id: 'userId2', created_at: new Date() }];

        // Mock comment model's find method
        commentModel.find = jest.fn().mockReturnValueOnce({
            populate: jest.fn().mockReturnValueOnce({
                sort: jest.fn().mockResolvedValueOnce(mockComments)
            })
        });

        // Call the getCommentWithcontent function
        await getCommentWithcontent(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'Comment found successfully', data: mockComments });
    });


    it('Retrieves all comments successfully', async () => {
        // Mock request and response objects
        const req = {};
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock comments data
        const mockComments = [{ _id: 'comment1Id', content: 'Comment 1', user_id: 'userId1', created_at: new Date() }, { _id: 'comment2Id', content: 'Comment 2', user_id: 'userId2', created_at: new Date() }];

        // Mock comment model's find method
        commentModel.find = jest.fn().mockReturnValueOnce({
            populate: jest.fn().mockReturnValueOnce({
                sort: jest.fn().mockResolvedValueOnce(mockComments)
            })
        });

        // Call the getAllComments function
        await getAllComments(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'Comment found successfully', data: mockComments });
    });


    it('Updates a comment successfully', async () => {
        // Mock request and response objects
        const req = {
            params: { id: 'commentId' },
            body: { content: 'Updated comment',
            user_id: '65a52d96361bd1b767103a9e',
            product_id: '65a52d96361bd1b767103a9e'
         }
        };
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock updated comment data
        const updatedComment = { _id: 'commentId', content: 'Updated comment', updated_at: new Date() };

        // Mock comment model's findByIdAndUpdate method
        commentModel.findByIdAndUpdate = jest.fn().mockResolvedValueOnce(updatedComment);

        // Call the updateComment function
        await updateComment(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'Comment updated successfully', Comment: updatedComment });
    });


    it('Deletes a comment successfully', async () => {
        // Mock request and response objects
        const req = { params: { id: 'commentId' } };
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock comment model's findByIdAndDelete method
        const mockDeletedComment = { _id: 'commentId', text: 'Deleted comment' };
        commentModel.findByIdAndDelete = jest.fn().mockResolvedValueOnce(mockDeletedComment);

        // Call the deleteComment function
        await deleteComment(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'Comment deleted successfully', deletedComment: mockDeletedComment });
    });

});
