
const categoryModel = require('../models/categoriesModel');
const subCategoryModel = require('../models/subCategoryModel');
const productModel = require("../models/productModel");
const { categoryValidation } = require('../requests/category.request');
const { createNewCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');

jest.mock('../models/categoriesModel');
jest.mock('../models/subCategoryModel');
jest.mock('../models/productModel');
jest.mock('../requests/category.request');

test('Creates a new category successfully with valid data', async () => {
    const mockCategoryData = {
        name: 'Test Category',
    };

    const req = {
        body: mockCategoryData,
    };

    const res = {
        json: jest.fn(),
        status: jest.fn(),
    };

    categoryValidation.mockReturnValueOnce({ error: null });
    categoryModel.create.mockResolvedValueOnce(mockCategoryData);

    await createNewCategory(req, res);

    expect(res.json).toHaveBeenCalledWith({
        success: 'Category created successfully',
        category: mockCategoryData,
    });

    expect(res.status).not.toHaveBeenCalled();
});


test('Returns categories successfully', async () => {
    const mockCategories = [
        { name: 'Category 1' },
        { name: 'Category 2' },
    ];

    const req = {};
    const res = {
        json: jest.fn(),
        status: jest.fn(),
    };

    categoryModel.find.mockResolvedValueOnce(mockCategories);

    await getCategories(req, res);

    expect(res.json).toHaveBeenCalledWith({
        success: 'Category found successfully',
        data: mockCategories,
    });

    expect(res.status).not.toHaveBeenCalled();
});


test('Updates category successfully with valid data', async () => {
    const mockCategoryData = {
        name: 'Updated Category',
    };

    const req = {
        params: { id: 'validID' },
        body: mockCategoryData,
    };

    const res = {
        json: jest.fn(),
        status: jest.fn(),
    };

    categoryValidation.mockReturnValueOnce({ error: null });
    categoryModel.findByIdAndUpdate.mockResolvedValueOnce(mockCategoryData);

    await updateCategory(req, res);

    expect(res.json).toHaveBeenCalledWith({
        success: 'Category updated successfully',
        updatedCategory: mockCategoryData,
    });

    expect(res.status).not.toHaveBeenCalled();
});


test('Deletes category successfully', async () => {
    const mockCategoryID = 'validCategoryID';
    const mockDeletedCategory = { _id: mockCategoryID };

    const req = {
        params: { id: mockCategoryID },
    };

    const res = {
        json: jest.fn(),
        status: jest.fn(),
    };

    categoryModel.findByIdAndDelete.mockResolvedValueOnce(mockDeletedCategory);
    productModel.deleteMany.mockResolvedValueOnce({});
    subCategoryModel.deleteMany.mockResolvedValueOnce({});

    await deleteCategory(req, res);

    expect(res.json).toHaveBeenCalledWith({
        success: 'Category deleted successfully',
        deletedCategory: mockDeletedCategory,
    });

    expect(res.status).not.toHaveBeenCalled();
});

