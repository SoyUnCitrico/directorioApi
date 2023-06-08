import { Contact } from "./contact.interface";

export interface User {
    user: Contact
    directorio: Array<Contact>
    isAdmin: boolean
}