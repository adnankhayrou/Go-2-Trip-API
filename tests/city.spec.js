// Import necessary modules
const cityModel = require('../models/citiesModel');
const productModel = require("../models/productModel");

const { createNewCity, getCities, updateCity, deleteCity } = require('../controllers/cityController');

// Mock the City model
jest.mock('../models/citiesModel');
jest.mock('../models/productModel');

// Test cases
describe('City', () => {
    test('Creates a new city successfully with valid data', async () => {
        // Mock data and expected response
        const mockCityData = { name: 'New City' };
        const expectedResponse = { success: 'City created successfully', city: mockCityData };

        // Mock the request and response objects
        const req = { body: mockCityData };
        const res = { json: jest.fn() };

        // Mock the City.create method to resolve with mockCityData
        cityModel.create.mockResolvedValueOnce(mockCityData);

        // Call the function under test
        await createNewCity(req, res);

        // Assert that the response is as expected
        expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    
    test('Retrieves all cities successfully', async () => {
        // Mock data
        const mockCities = [
            { name: 'City1' },
            { name: 'City2' }
        ];

        // Mock the find method of City model to return mockCities
        cityModel.find.mockResolvedValueOnce(mockCities);

        // Mock request and response objects
        const req = {};
        const res = {
            json: jest.fn(),
            status: jest.fn()
        };

        // Call the function under test
        await getCities(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'City found successfully', data: mockCities });
    });


    test('Updates city successfully with valid data', async () => {
        // Mock data
        const mockCityId = 'mockCityId';
        const mockCityData = { name: 'Updated City' };

        // Mock request and response objects
        const req = {
            params: { id: mockCityId },
            body: mockCityData
        };
        const res = {
            json: jest.fn(),
            status: jest.fn()
        };

        // Mock the findByIdAndUpdate method of City model to return updated city
        cityModel.findByIdAndUpdate.mockResolvedValueOnce(mockCityData);

        // Call the function under test
        await updateCity(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'City updated successfully', updatedCity: mockCityData });
    });



    it('Deletes city successfully', async () => {
        // Mock request and response objects
        const req = { params: { id: 'mockCityId' } };
        const res = {
            json: jest.fn(),
            status: jest.fn(() => res) // Return itself for method chaining
        };

        // Mock City model's findByIdAndDelete method
        const mockDeletedCity = { _id: 'mockCityId', name: 'Mock City' };
        cityModel.findByIdAndDelete = jest.fn().mockResolvedValueOnce(mockDeletedCity);

        // Mock product model's deleteMany method
        productModel.deleteMany = jest.fn().mockResolvedValueOnce({});

        // Call the deleteCity function
        await deleteCity(req, res);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith({ success: 'City deleted successfully', deletedCity: mockDeletedCity });
    });
    
});
