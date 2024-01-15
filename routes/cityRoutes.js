const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController');


router.post('/createCity', cityController.createNewCity);
router.get('/getCity/:id', cityController.getCityWithId);


module.exports = router;