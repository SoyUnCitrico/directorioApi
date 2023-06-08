import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next:NextFunction) => {
    const header = req.headers; 
    const userAgent = header["user-agent"]

    console.log("LOG INFO");
    console.log("USER_AGENT: ", userAgent);
    next();
}

export { logMiddleware };