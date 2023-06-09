import { User } from "../interface/user.interface"
import UserModel from "../models/users"

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
    const returnedUser = UserModel.findOneAndDelete({ _id: id })
    return returnedUser;
}

const updateUser = async(id:string, data: User) => {
    // console.log(data)
    const returnedUser = UserModel.findOneAndUpdate({_id: id}, data, {new:true})
    return returnedUser;
}

export {
    getUser,
    getUsers,
    deleteUser,
    updateUser,
}