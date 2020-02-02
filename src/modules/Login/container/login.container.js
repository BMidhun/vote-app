import React from 'react';
import LoginComponent from '../component/login.component';
import RegisterComponent from '../component/register.component';

function LoginContainer() {
    const [isLogin,setIsLogin] = React.useState(true);
    
    return isLogin ? <LoginComponent onSignIn = {() => {setIsLogin(false)}} /> 
                    :  <RegisterComponent onLogIn = {() => {setIsLogin(true)}}/>
    
}

export default LoginContainer;
