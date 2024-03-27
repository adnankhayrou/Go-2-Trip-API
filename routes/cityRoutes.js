const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController');


router.post('/createCity', cityController.createNewCity);
router.get('/getCities', cityController.getCities);
router.post('/updateCity/:id', cityController.updateCity);
router.delete('/deleteCity/:id', cityController.deleteCity);


/**
 * @swagger
 * /api/city/createCity:
 *   post:
 *     summary: Create a new city
 *     description: Endpoint to create a new city.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cityName:
 *                 type: string
 *                 description: The name of the city.
 *             example:
 *               cityName: Example City
 *     responses:
 *       '200':
 *         description: City created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 city:
 *                   $ref: '#/components/schemas/City'
 *       '400':
 *         description: Bad request, validation error, or something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Cities
 */


/**
 * @swagger
 * /api/city/getCities:
 *   get:
 *     summary: Get all cities
 *     description: Endpoint to retrieve all cities.
 *     responses:
 *       '200':
 *         description: Cities fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/City'
 *       '404':
 *         description: Cities not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *       '400':
 *         description: Something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Cities
 */


/**
 * @swagger
 * /api/city/updateCity/{id}:
 *   post:
 *     summary: Update a city
 *     description: Endpoint to update a city by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the city to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cityName:
 *                 type: string
 *                 description: The updated name of the city.
 *             example:
 *               cityName: Updated City Name
 *     responses:
 *       '200':
 *         description: City updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 updatedCity:
 *                   $ref: '#/components/schemas/City'
 *       '404':
 *         description: City not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *       '400':
 *         description: Bad request, validation error, or something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Cities
 */


/**
 * @swagger
 * /api/city/deleteCity/{id}:
 *   delete:
 *     summary: Delete a city
 *     description: Endpoint to delete a city by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the city to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: City deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 deletedCity:
 *                   $ref: '#/components/schemas/City'
 *       '404':
 *         description: City not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *       '400':
 *         description: Bad request or something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Cities
 */




module.exports = router;