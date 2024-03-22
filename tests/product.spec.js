const productModel = require('../models/productModel');
const commentModel = require('../models/commentModel');
const { productValidation } = require('../requests/product.request');
const { storeImageGetPath } = require("../utils/tools");

jest.mock('../models/productModel');
jest.mock('../models/commentModel');
jest.mock('../requests/product.request');
jest.mock("../utils/tools");

const {createNewProduct, updateProduct, deleteProduct} = require('../controllers/productController');

test('Creates a product successfully with valid data', async () => {
    const mockProductCreate = productModel.create.mockResolvedValueOnce({ success: true });
    const mockProductValidation = productValidation.mockReturnValue({ error: null });
    const mockStoreImageGetPath = storeImageGetPath.mockImplementationOnce((file) => Promise.resolve(`/uploads/${file}`));
  
    const req = {
      body: {
        name: 'tent',
        images: ['image_1.jpg', 'image_2.png', 'image_3.gif'],  
        description: 'A great tent for camping',
        price: 300,
        phone: '+1 (311) 997-9582',
        user_id: '65a52d96361bd1b767103a9e',
        city_id: '65a53fdb10f560e5ec524892',
        category_id: '65edddb52d19afb7bf78cf3c',
        subCategory_id: '65edddd22d19afb7bf78cf59',
      },
    };
  
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
  
    await createNewProduct(req, res);
  
    expect(res.json).toHaveBeenCalledWith({ success: 'Product created successfully', Product: { success: true } });
  
    expect(mockProductCreate).toHaveBeenCalledTimes(1); 
    expect(mockProductValidation).toHaveBeenCalledTimes(1);
    expect(mockStoreImageGetPath).toHaveBeenCalledTimes(3);
  });



  test('Updates product successfully with valid data', async () => {
    const mockProduct = {
        _id: '65a52d96361bd1b767103a9e',
        name: 'tent',
        description: 'A great tent for camping',
        price: 300,
        phone: '+1 (311) 997-9582',
        user_id: '65a52d96361bd1b767103a9e',
        city_id: '65a53fdb10f560e5ec524892',
        category_id: '65edddb52d19afb7bf78cf3c',
        subCategory_id: '65edddd22d19afb7bf78cf59',
        images: ['image_1.jpg', 'image_2.png', 'image_3.gif'],
        oldImages: ['old_image_1.jpg', 'old_image_2.png'],
    };

    const req = {
        body: {
        name: 'updated tent',
        description: 'An updated tent for camping',
        price: 400,
        phone: '+1 (311) 997-9582',
        user_id: '65a52d96361bd1b767103a9e',
        city_id: '65a53fdb10f560e5ec524892',
        category_id: '65edddb52d19afb7bf78cf3c',
        subCategory_id: '65edddd22d19afb7bf78cf59',
        images: ['new_image_1.jpg', 'new_image_2.png'],
        oldImages: ['old_image_1.jpg', 'old_image_2.png'],
        },
        params: { id: '65a52d96361bd1b767103a9e' },
    };

    const res = {
        json: jest.fn(),
        status: jest.fn(),
    };

    productModel.findByIdAndUpdate.mockResolvedValueOnce(mockProduct);

    await updateProduct(req, res);

    expect(res.json).toHaveBeenCalledWith({
        success: 'Product updated successfully',
        updatedProduct: mockProduct,
    });

    expect(res.status).not.toHaveBeenCalled();
});



test('Deletes product successfully with valid ID', async () => {
    const mockProduct = {
        _id: '65a52d96361bd1b767103a9e',
        name: 'tent',
        description: 'A great tent for camping',
        price: 300,
        phone: '+1 (311) 997-9582',
        user_id: '65a52d96361bd1b767103a9e',
        city_id: '65a53fdb10f560e5ec524892',
        category_id: '65edddb52d19afb7bf78cf3c',
        subCategory_id: '65edddd22d19afb7bf78cf59',
    };

    const req = {
        params: { id: '65a52d96361bd1b767103a9e' },
    };

    const res = {
        json: jest.fn(),
        status: jest.fn(),
    };

    productModel.findByIdAndDelete.mockResolvedValueOnce(mockProduct);
    commentModel.deleteMany.mockResolvedValueOnce({ n: 1 });

    await deleteProduct(req, res);

    expect(res.json).toHaveBeenCalledWith({
        success: 'Product deleted successfully',
        deletedProduct: mockProduct,
    });

    expect(res.status).not.toHaveBeenCalled();
});

