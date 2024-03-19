const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');


router.get('/getAllUsers',userController.getAllUsers)
router.get('/userwithName', userController.getUserWithName)
router.post('/updateUser/:id',userController.updateUserName)
router.delete('/deleteUser/:id',userController.deleteUser)



module.exports = router