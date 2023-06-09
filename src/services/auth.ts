import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface"
import UserModel from "../models/users"
import { encrypt, verified } from "../utils/crypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (authUser: User) => {
    // console.log(authUser);
    const checkIs = await UserModel.findOne({
        "user.name" : authUser.user.name,   
        "user.email" : authUser.user.email,
    });
    if(checkIs) { return('Ya existe el usuario') }
    else {
        const passHash = await encrypt(authUser.password);
        const isAdmin = authUser.isAdmin??false
        const dir = authUser.directorio.length>0?authUser.directorio:[]
        const registeredUser = await UserModel.create({
            user: {
                name:authUser.user.name, 
                email:authUser.user.email,
                phone:authUser.user.phone,
                lastName:authUser.user.lastName,
            },
            password: passHash,
            isAdmin: isAdmin,
            directorio: dir
        }) 
        return registeredUser;
    }
}
   
    
    
const loginUser = async (authUser:Auth) => {
    // Busca email en la base de datos
    const checkIs = await UserModel.findOne({
        "user.email" : authUser.user.email,
    });
    if(!checkIs) { return('El usuario no se ha encontrado con los datos de tu busqueda') }
    else {
        // si encuentra email verifica la contraseña  con el hash del server
        const passwordHashed = checkIs.password;
        const isCorrect = await verified(authUser.password, passwordHashed)
        if(!isCorrect) return "PASSWORD INCORRECTA";
        else {
            // Si la contraseña es correcta devuelve el token para status de sesion
            const token = await generateToken(checkIs.id);
            const data = {
                token,
                authUser: checkIs,
            }
            return data;
        };
    }
}

export {
    registerNewUser,
    loginUser
}