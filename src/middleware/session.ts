import { NextFunction, Request, Response } from "express";

const sessionMiddleware = (req: Request, res: Response, next:NextFunction) => {
    next();
}

export { sessionMiddleware };