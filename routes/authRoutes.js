const express = require('express')
const { registerUser, allUser, loginUser } = require('../controller/authController')
const protect = require('../middleware/authMiddleware')


const router = express.Router()


router.post("/register" , registerUser)
router.post("/login" ,  loginUser)
router.get("/users" , allUser)


module.exports = router
