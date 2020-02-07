export default class AppStorage {

    static set(User) {

       User.auth ? localStorage.setItem("token",User.username) : localStorage.removeItem("token")
    }

    static get(){
        const username = localStorage.getItem("token");
        return username
    }
}