import { Response, Request } from 'express';
import { errorHandleHttp } from '../utils/error.handle';
import { getUser, getUsers, deleteUser } from '../services/user';


const getUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getUser(id);
        res.send(response);
    } catch(e) {
        errorHandleHttp(res, 'ERROR GET_USERS')
    }
}

const getUsuarios = async (req: Request, res: Response) => {
    try {
        const response = await getUsers();
        res.send(response);
    } catch(e) {
        errorHandleHttp(res, 'ERROR GET_USERS')
    }
}

const deleteUsuario = async(req: Request, res: Response) => {
    try { 
        const { id } = req.params
        const response = await deleteUser(id);
        res.send(response);

    } catch(e) {
        errorHandleHttp(res, 'ERROR DELETE_USER')
    }
}

export {
    getUsuario,
    getUsuarios,
    deleteUsuario
}