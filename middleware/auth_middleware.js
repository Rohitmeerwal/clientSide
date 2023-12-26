import  jwt  from "jsonwebtoken";
import userModel from "../models/userModel.js";

const userCheck = async (req, res, next)=>{
    let token
    const { authorization } = req.headers
    if(authorization && authorization.startsWith('Bearer')){
        try {
            token = authorization.split(' ')[1]
            const {userId} = jwt.verify(token, process.env.JWT_SECRET_KEY)
            
            req.user = await userModel.findById(userId).select("-password")
        
            next()
        } catch (error) {
            res.status(401).send({ message:"Error while"})
        }
    }
 if(!token){
    res.status(403).send({ message:"No token"})
 }
}
export default userCheck