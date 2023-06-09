import { User } from "../interface/user.interface"
import UserModel from "../models/users"
import { encrypt } from "../utils/crypt.handle";

const getUser = async (id:string) => {
    const returnedUser = UserModel.findOne({
        _id: id
    })
    return returnedUser;
}
const getUsers = async () => {
    const allUsers = UserModel.find({});
    return allUsers;
}

const deleteUser = async (id:string) => {
    const returnedUser = UserModel.deleteOne({ _id: id })
    return returnedUser;
}
export {
    getUser,
    getUsers,
    deleteUser,
}