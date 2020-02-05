import React from 'react'
import LandingPageHOC from '../HOC/landingpage.hoc'
import { Link } from "react-router-dom";

const LoginComponent = ({form,onInput,submitLogin}) => {
    return (
            <LandingPageHOC >

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
                        <p>Not a registered user? 
                            <span className="link-span">
                                <Link to="/register">
                                   SignIn
                                </Link>
                                </span> Now</p>

                    </div>
                 
            </LandingPageHOC>

          
    )
}

export default LoginComponent;
