import jwt from "jsonwebtoken"
import User from "../models/User.js"

const authMiddleware = async (req, res , next) => {
    const authHeader = req.headers.authorization
    if(!authHeader) return res.sendStatus(401)

        const token = authHeader.split(" ")[1]

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select("-password")
        next()
    }catch{
        res.sendStatus(401)
    }
}

export default authMiddleware