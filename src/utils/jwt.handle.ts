import { sign, verify } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || "token12345";

const generateToken = async (id: string) => {
    const jwt = await sign({id}, JWT_SECRET,{
        expiresIn:"2h",
    });

    return jwt;
}

const verifyToken = async(jwt: string) => {
    const tokenOk  = await verify(jwt, JWT_SECRET);
    return tokenOk;
}

export {
    generateToken,
    verifyToken,
}   