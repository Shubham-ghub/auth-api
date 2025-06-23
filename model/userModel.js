const {mongoose} = require('mongoose')
const userSchema = new mongoose.Schema({

    name : {
          type:String,
        required:[true , "Please Enter Name"]
    },
    email:{ 
        type:String,
        unique : true,
        required:[true , "Please Enter Email"]
    },
    password:{
           type : String,
        required: [true , "Please Enter Password"]
    },
       isAdmin:{
        type:Boolean,
        required : true,
        default : false
    }

},{
    timestamps:true
})

module.exports = mongoose.model('User' , userSchema)