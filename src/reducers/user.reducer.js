export default function (prevState={},action) {

    switch(action.type) {

        case "LOGIN" : return {...prevState,user:action.payload}
        default : return {...prevState}
    }
    
}