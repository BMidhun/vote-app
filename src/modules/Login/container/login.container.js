import React from 'react';
import LoginComponent from '../component/login.component';
import { connect } from "react-redux";
import {LogUser} from '../../../actions/user.actions';

function LoginContainer(props) {

    const [form,setForm] = React.useState({
        username:'',
        password : ''
    })

    const [isLoginValid,setIsLoginValid] = React.useState(true)

    const onInput = (event) => {
        setIsLoginValid(true)
        const data = {[event.target.name]:event.target.value}
        setForm(prev=>({...prev,...data}))
    }

    const submitLogin = (event) => {
        event.preventDefault();
        if(form.username === props.user.userReducer.username && form.password === props.user.userReducer.password){
            const User  = props.user.userReducer
            User.auth = true
             setIsLoginValid(true)
             props.logUser(User); 
             props.props.history.push('/vote-panel')
        }
        else
            setIsLoginValid(false)
        
            
    }

    React.useEffect(() => {console.log(props)},[props])
    
    return <LoginComponent form={form} onInput={onInput} submitLogin={submitLogin} isLoginValid = {isLoginValid}/> 
    
}

const mapStateToProps = (state) => {

    return {user : state}
}

const mapDispatchToProps = (dispatch) => {

        return {
            logUser : (user) => dispatch(LogUser(user))
        }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
