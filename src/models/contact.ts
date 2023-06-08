import { Schema, Types, model, Model } from 'mongoose';
import { Contact } from '../interface/contact.interface';

const ContactSchema = new Schema<Contact>(
    {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
            required: true
        }
    },
    {
        timestamps:true,
        versionKey: false,
    }
);

const ContactModel = model('contacts', ContactSchema);
export default ContactModel;