export default function (prevState={},action) {

        switch(action.type) {

            case "LOAD_DB"  : return {...prevState,userdb:action.payload}

            case "ADD_USER" : return {...prevState,userdb:[...prevState.userdb,action.payload]}
            default : return prevState
        }

}