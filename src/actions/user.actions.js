import AppStorage from '../modules/utils/storage'

export  function LogUser(User){

        AppStorage.set(User)
        return {
            type : "LOGIN",
            payload : User
        }
}


export  function Logout (User) {
        AppStorage.set(User)
        return {type:"LOGOUT",payload:User}
}