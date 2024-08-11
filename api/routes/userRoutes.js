const express = require('express');
const { registerController, loginController} = require("../controllers/userControllers")

// router object
const router = express.Router()

// route
// Register || Post 
router.post('/register', registerController)

// Login || Get
router.post('/login', loginController)



module.exports = router
