import React from 'react';
import LoginComponent from '../component/login.component';
import { connect } from "react-redux";
import LogUser from '../../../actions/user.actions';

function LoginContainer(props) {

    const [form,setForm] = React.useState({
        username:'',
        password : ''
    })

    const onInput = (event) => {
        const data = {[event.target.name]:event.target.value}
        setForm(prev=>({...prev,...data}))
    }

    const submitLogin = (event) => {
        event.preventDefault();
        let User=null
        props.user.userdb.forEach(user => {
            if(user.username === form.username && user.password === form.password) {
                
                User = {...user,auth:true}
                props.history.push('/vote-panel')
            }
            
        })

        props.logUser(User);

    }

    React.useEffect(() => {console.log(props)},[props])
    
    return <LoginComponent form={form} onInput={onInput} submitLogin={submitLogin}/> 
    
}

const mapStateToProps = (state) => {

    return {user : state.userDBReducer}
}

const mapDispatchToProps = (dispatch) => {

        return {
            logUser : (user) => dispatch(LogUser(user))
        }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
