import { Request, Response } from 'express';
import { registerNewUser, loginUser } from '../services/auth';
import { errorHandleHttp } from '../utils/error.handle';

const registerCtrl = async(req: Request, res: Response) => {
    try {
        const responseUser = await registerNewUser(req.body);
        res.send(responseUser)
    } catch (e) {
        errorHandleHttp(res, 'ERROR Register_Ctrl')
    }
}


const loginCtrl = async(req:Request, res:Response) => {
    try {
        console.log(req.body)
        const responseUser = await loginUser(req.body)
        if(responseUser === "PASSWORD INCORRECTA") {
            res.status(403);
            res.send(responseUser);
        }else {
            res.send(responseUser)
        }
    } catch(e) {
        errorHandleHttp(res, 'ERROR LOGIN_Ctrl')
    }
}

export { 
    registerCtrl, 
    loginCtrl
}