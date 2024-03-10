const express = require('express')
const router = express.Router()
const statisticsController = require('../controllers/statisticsContrller');


router.get('/AllStatistics',statisticsController.statistics)


module.exports = router