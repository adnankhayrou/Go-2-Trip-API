// subCategory.spec.js
const subCategoryModel = require('../models/subCategoryModel');
const productModel = require('../models/productModel');
const { subCategoryValidation } = require('../requests/subCategory.request');
const { createNewSubCategory, getsubCategories, updateSubCategory, deleteSubCategory } = require('../controllers/subCategoryController');

jest.mock('../models/subCategoryModel');
jest.mock('../models/productModel');
jest.mock('../requests/subCategory.request');

test('Creates a new subcategory successfully with valid data', async () => {
    const mockSubCategoryData = {
        name: 'New Subcategory',
    };

    const req = {
        body: mockSubCategoryData,
    };

    const res = {
        json: jest.fn(),
        status: jest.fn(),
    };

    subCategoryValidation.mockReturnValueOnce({ error: null });
    subCategoryModel.create.mockResolvedValueOnce(mockSubCategoryData);

    await createNewSubCategory(req, res);

    expect(res.json).toHaveBeenCalledWith({
        success: 'subCategory created successfully',
        sub_category: mockSubCategoryData,
    });

    expect(res.status).not.toHaveBeenCalled();
});



test('Retrieves subcategories successfully for valid category ID', async () => {
    const mockCategoryID = 'validCategoryID';
    const mockSubCategories = [
        { name: 'Subcategory 1' },
        { name: 'Subcategory 2' },
    ];

    const req = {
        params: { id: mockCategoryID },
    };

    const res = {
        json: jest.fn(),
        status: jest.fn(),
    };

    subCategoryModel.find.mockResolvedValueOnce(mockSubCategories);

    await getsubCategories(req, res);

    expect(res.json).toHaveBeenCalledWith({
        success: 'SubCategory found successfully',
        data: mockSubCategories,
    });

    expect(res.status).not.toHaveBeenCalled();
});




test('Updates subcategory successfully', async () => {
    const mockSubCategoryId = 'validSubCategoryId';
    const mockUpdatedSubCategory = { name: 'Updated Subcategory' };

    const validationResult = { error: null };
    const req = {
        params: { id: mockSubCategoryId },
        body: mockUpdatedSubCategory,
    };

    const res = {
        json: jest.fn(),
        status: jest.fn(),
    };

    const { subCategoryValidation } = require('../requests/subCategory.request');
    subCategoryValidation.mockReturnValueOnce(validationResult);

    subCategoryModel.findByIdAndUpdate.mockResolvedValueOnce(mockUpdatedSubCategory);

    await updateSubCategory(req, res);

    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        success: 'SubCategory updated successfully',
        updatedSubCategory: mockUpdatedSubCategory,
    });
});



test('Deletes subcategory successfully', async () => {
    const mockSubCategoryId = 'validSubCategoryId';
    const mockDeletedSubCategory = { _id: mockSubCategoryId, name: 'Deleted Subcategory' };

    const req = {
        params: { id: mockSubCategoryId },
    };

    const res = {
        json: jest.fn(),
        status: jest.fn(),
    };

    subCategoryModel.findByIdAndDelete.mockResolvedValueOnce(mockDeletedSubCategory);

    await deleteSubCategory(req, res);

    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        success: 'SubCategory deleted successfully',
        deletedSubCategory: mockDeletedSubCategory,
    });

    expect(productModel.deleteMany).toHaveBeenCalledWith({ subCategory_id: mockSubCategoryId });
});