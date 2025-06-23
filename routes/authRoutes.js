const express = require('express')
const { registerUser, uloginUser, loginUser } = require('../controller/authController')
const protect = require('../middleware/authMiddleware')


const router = express.Router()


router.post("/register" , registerUser)
router.post("/login" ,  loginUser)


module.exports = router