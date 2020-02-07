import React from 'react'

const LoginComponent = ({form,onInput,submitLogin,isLoginValid}) => {
    return (
        <div className="login-page text-center">
        <div className="container">
             <h1 className="l-heading"> 
                <span className="spl-text">CAST</span> YOUR VOTES
            </h1>
            <div className="login-box">

                    <h2 className="m-heading">LOGIN</h2>
                    <div className="flex-col-container">
                        <form onSubmit={submitLogin} method="POST">
                        <input type="text" 
                        placeholder="Username" 
                        className="flex-col-items"
                        name="username"
                        value={form.username}
                        required
                        onChange={onInput}
                        />

                        <input type="password" 
                        placeholder="Password" 
                        className="flex-col-items"
                        name="password"
                        value={form.password}
                        required
                        onChange={onInput}
                        />

                        <button className="btn btn-dark flex-col-items" type="submit">LOGIN</button>
                        </form>
                        
                    </div>

                 {isLoginValid ? null : window.alert("Invalid Credentials")}
                 
                 </div>
                </div>
        </div>

          
    )
}

export default LoginComponent;
