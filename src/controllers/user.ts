import { Response, Request } from 'express';
import { errorHandleHttp } from '../utils/error.handle';
import { getUser, getUsers, deleteUser, updateUser } from '../services/user';
import { RequestExt } from '../interface/reqExt.interface';

const getUsuario = async (req: RequestExt, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getUser(id);
        res.send({
            data:response,
            userOrigin: req.user
        });
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

const updateUsuario = async(req: Request, res: Response) => {
    try { 
        const { id } = req.params
        const response = await updateUser(id, req.body);
        res.send(response);

    } catch(e) {
        errorHandleHttp(res, 'ERROR UPDATE_USER')
    }
}

export {
    getUsuario,
    getUsuarios,
    deleteUsuario,
    updateUsuario
}