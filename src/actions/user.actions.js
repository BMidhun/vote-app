export default function LogUser(User){

    return User  ? {
        type:"LOGIN",
        payload : User
    } : {type:''}

}