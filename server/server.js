const express = require('express')
const connectDB = require('../config/dbConfig')
const errorHandler = require('../middleware/errorHandler')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

// DB Config
connectDB()

// Body Parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// default route
app.get('/' , (req,res) =>{
    res.json({
        msg:'welcome to crypto-auth api'
    })

})

// server start
app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`)
})

// Auth router
app.use("/api/auth" , require('../routes/authRoutes'))
// Error handler
app.use(errorHandler)