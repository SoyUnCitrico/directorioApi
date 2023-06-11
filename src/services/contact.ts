import { Contact } from "../interface/contact.interface";
import ContactModel from "../models/contact";

const insertContact = async (contact: Contact) => {
    const existinContact = await ContactModel.findOne({
        name: contact.name,
        email: contact.email
    })
    
    if( existinContact === null ) {
        const responseInsert = await ContactModel.create(contact)
        return responseInsert;
    }

    // Si este usuario ya existe solo retorna el usuario existente
    return existinContact;
}

const getContacts = async()=> {
    const responseContacts = await ContactModel.find({})
    return responseContacts;
}

const getManyContacts = async(data:Array<any>)=> {
    const responseContacts = await ContactModel.find({_id:{$in:data}})
    return responseContacts;
}

const getContact = async( id:string )=> {
    const responseContact = await ContactModel.findOne({
        _id: id
    })
    return responseContact;
}

const updateContact =async(id: string, data: Contact)=> {
    const responseContact = await ContactModel.findOneAndUpdate({_id: id}, data, { new: true })
    return responseContact;
}

const deleteContact = async( id:string )=> {
    const responseContact = await ContactModel.deleteOne({ _id: id })
    return responseContact;
}
export { 
    insertContact,
    getContacts,
    getContact,
    updateContact,
    deleteContact,
    getManyContacts
}