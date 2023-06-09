import { Contact } from "./contact.interface";
export interface Auth {
    user: Contact; // Requerido
    password: string; // Requerido
}