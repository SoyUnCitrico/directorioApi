import { Contact } from "./contact.interface";
import { Auth } from "./auth.interface";

export interface User extends Auth {
    directorio: Array<string>
    isAdmin: boolean
}