const mongoose = require('mongoose')

const connectDB = async ()=>{
     try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB Connection Success : ${conn.connection.name}`)
    } catch (error) {
        console.log(`DB Connection Failed : ${error.message}`)
        
    }
  
}

module.exports = connectDB