import React from 'react'
import LandingPageHOC from '../HOC/landingpage.hoc'

const LoginComponent = (props) => {
    return (
            <LandingPageHOC >

                    <h2 className="m-heading">LOGIN</h2>
                    <div className="flex-col-container">
                        <input type="text" placeholder="Username" className="flex-col-items"/>
                        <input type="password" placeholder="Password" className="flex-col-items"/>
                        <button className="btn btn-dark flex-col-items">LOGIN</button>
                        <p>Not a registered user? <span className="link-span" onClick={() => {props.onSignIn()}}>SignIn</span> Now</p>

                    </div>
                 
            </LandingPageHOC>

          
    )
}

export default LoginComponent;
