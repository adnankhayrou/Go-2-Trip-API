const userModel = require('../models/userModel');
const productModel = require('../models/productModel');

const { getAllUsers, getUserWithName, updateUserName, deleteUser } = require('../controllers/userController');


jest.mock('../models/userModel');
jest.mock('../models/productModel');

describe('Users', () => {
    it('Retrieves all users successfully', async () => {
        // Mock request and response objects
        const req = {};
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock userModel's find method
        const mockUsers = [{ _id: 'mockUserId1', name: 'User 1' }, { _id: 'mockUserId2', name: 'User 2' }];
        userModel.find = jest.fn().mockResolvedValueOnce(mockUsers);

        // Call the getAllUsers function
        await getAllUsers(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'Users found successfully', data: mockUsers });
    });



    it('Retrieves users with specified name pattern successfully', async () => {
        // Mock request and response objects
        const req = { query: { name: 'User' } };
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock userModel's find method
        const mockUsers = [{ _id: 'mockUserId1', name: 'User 1' }, { _id: 'mockUserId2', name: 'User 2' }];
        userModel.find = jest.fn().mockResolvedValueOnce(mockUsers);

        // Call the getUserWithName function
        await getUserWithName(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'User found successfully', data: mockUsers });
    });


    it('Updates user name successfully', async () => {
        // Mock request and response objects
        const req = {
            params: { id: 'mockUserId' },
            body: { name: 'New Name' }
        };
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock userModel's findByIdAndUpdate method
        const updatedUser = { _id: 'mockUserId', name: 'New Name' };
        userModel.findByIdAndUpdate = jest.fn().mockResolvedValueOnce(updatedUser);

        // Call the updateUserName function
        await updateUserName(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'User name updated successfully', updatedUser });
    });

    it('Deletes user, products, and associated comments successfully', async () => {
        // Mock request and response objects
        const req = {
            params: { id: 'mockUserId' }
        };
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock userModel's findByIdAndDelete method
        const deletedUser = { _id: 'mockUserId', name: 'Mock User', role: 'Seller' };
        userModel.findByIdAndDelete = jest.fn().mockResolvedValueOnce(deletedUser);

        // Mock product and comment models' deleteMany methods
        productModel.deleteMany = jest.fn().mockResolvedValueOnce({});
        const comment = require('../models/commentModel');
        comment.deleteMany = jest.fn().mockResolvedValueOnce({});

        // Call the deleteUser function
        await deleteUser(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'User, products, and associated comments deleted successfully', deletedUser });
    });
});
