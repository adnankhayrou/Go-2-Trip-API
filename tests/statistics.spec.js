const comment = require("../models/commentModel");
const product = require("../models/productModel");
const userModel = require('../models/userModel');
const subCategory = require("../models/subCategoryModel");
const Category = require("../models/categoriesModel");
const City = require("../models/citiesModel");
const { statistics } = require('../controllers/statisticsContrller');

jest.mock('../models/citiesModel');
jest.mock('../models/productModel');
jest.mock('../models/commentModel');
jest.mock('../models/userModel');
jest.mock('../models/categoriesModel');
jest.mock('../models/subCategoryModel');

describe('statistics', () => {
    it('Fetches statistics successfully', async () => {
        // Mock request and response objects
        const req = {};
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock data for comments, products, users, subCategories, categories, and cities
        const mockComments = [{ _id: 'comment1' }, { _id: 'comment2' }];
        const mockProducts = [{ _id: 'product1' }, { _id: 'product2' }];
        const mockUsers = [{ _id: 'user1' }, { _id: 'user2' }];
        const mockSubCategories = [{ _id: 'subCategory1' }, { _id: 'subCategory2' }];
        const mockCategories = [{ _id: 'category1' }, { _id: 'category2' }];
        const mockCities = [{ _id: 'city1' }, { _id: 'city2' }];

        
        comment.find = jest.fn().mockResolvedValueOnce(mockComments);
        product.find = jest.fn().mockResolvedValueOnce(mockProducts);
        userModel.find = jest.fn().mockResolvedValueOnce(mockUsers);
        subCategory.find = jest.fn().mockResolvedValueOnce(mockSubCategories);
        Category.find = jest.fn().mockResolvedValueOnce(mockCategories);
        City.find = jest.fn().mockResolvedValueOnce(mockCities);

        // Call the statistics function
        await statistics(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({
            success: "Statistics founded successfully",
            comments: mockComments,
            products: mockProducts,
            users: mockUsers,
            subCategories: mockSubCategories,
            categories: mockCategories,
            cities: mockCities
        });
    });

    it('Handles errors during statistics retrieval', async () => {
        // Mock request and response objects
        const req = {};
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };


        comment.find = jest.fn().mockRejectedValueOnce(new Error('Database error'));
        product.find = jest.fn().mockRejectedValueOnce(new Error('Database error'));
        userModel.find = jest.fn().mockRejectedValueOnce(new Error('Database error'));
        subCategory.find = jest.fn().mockRejectedValueOnce(new Error('Database error'));
        Category.find = jest.fn().mockRejectedValueOnce(new Error('Database error'));
        City.find = jest.fn().mockRejectedValueOnce(new Error('Database error'));

        // Call the statistics function
        await statistics(req, res);

        // Assert the response
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: "Something went wrong" });
    });
});
