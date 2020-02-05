import userdata from '../data/userdata';

export default function loadUserDb(){

    return {
        type : "LOAD_DB",
        payload : userdata
    }
}