// const jwt = require('jsonwebtoken')
// const User = require('../model/userModel')


// const protect = async (req , res , next) =>{
//     if(req.headers.authorization && req.headers.authorization.startWith('Bearer')){

//         let token

//         try {
//             token = req.headers.authorization.split(' ')[1]

//             const decoded = jwt.verify(token , process.env.JWT_SECRET)

//             req.user = await User.findByyId(decoded.id).select('-password')
//             next()
//         } catch (error) {

//             res.status(401)
//             throw new Error("Invaild Request : unauthorised")
            
//         }
//     }else{
//         res.status(401)
//         throw new Error("Invaild Request : unauthorised")
//     }
// }

// module.exports = protect