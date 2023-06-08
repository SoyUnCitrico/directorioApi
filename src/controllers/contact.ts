import { Response, Request } from 'express';
import { errorHandleHttp } from '../utils/error.handle';
import { insertContact, getContacts, getContact, updateContact, deleteContact } from '../services/contact';


const getContacto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const response = await getContact(id);
        const data = response ? response : "RECURSO NO ENCONTRADO"
        res.send(data);
    } catch(e) {
        errorHandleHttp(res, 'ERROR GET_CONTACT')
    }
}

const getContactos = async (req: Request, res: Response) => {
    try {
        const response = await getContacts();
        res.send(response);
    } catch(e) {
        errorHandleHttp(res, 'ERROR GET_CONTACTS')
    }
}
const updateContacto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await updateContact(id, req.body)
        res.send(response);
    } catch(e) {
        errorHandleHttp(res, 'ERROR UPDATE_CONTACT')
    }
}
const postContacto = async (req: Request, res: Response) => {
    try {
        // res.send(req.body)
        const responseContact = await insertContact(req.body)
        res.send(responseContact);
    } catch(e) {
        errorHandleHttp(res, 'ERROR POST_CONTACT', e)
    }
}
const deleteContacto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const response = await deleteContact(id);
        res.send(response);
    } catch(e) {
        errorHandleHttp(res, 'ERROR DELETE_CONTACT')
    }
}


export {
    getContacto,
    getContactos,
    updateContacto,
    postContacto,
    deleteContacto
}