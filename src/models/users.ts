import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interface/user.interface';
import { ContactSchema } from './contact';

const UserSchema = new Schema<User>(
    {
        user: {
            type: ContactSchema,
            required:true
        },
        password: {
            type: String,
            required:true
        },
        directorio: {
            type: [ContactSchema]
        },
        isAdmin: {
            type: Boolean
        }
    },
    {
        timestamps:true,
        versionKey: false,
    }
);

const UserModel = model('users', UserSchema);
export default UserModel;