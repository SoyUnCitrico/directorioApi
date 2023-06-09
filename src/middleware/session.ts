import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = async(req: Request, res: Response, next:NextFunction) => {
    try {
        const jwtUser = req.headers.authorization || null;
        const jwt = jwtUser?.split(' ').pop();
        const tokenOk = await verifyToken(`${jwt}`)
        
        if(!tokenOk) {
            res.status(401);
            res.send("JWT INVALID")
        } else {
            next();
        }
    } catch(e) {    
        res.status(400);
        res.send("SESSION NO VALIDA")
    }
}


export { checkJwt }