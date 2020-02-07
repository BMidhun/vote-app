const initialState =  {
       
    username:'test',
    password : 'test123',
    auth : false
}



export default function (prevState=initialState,action) {

    switch(action.type) {

        case "LOGIN" : return {...prevState,...action.payload}
        default : return {...prevState}
    }
    
}