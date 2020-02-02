import React from 'react'
import LandingPageHOC from '../HOC/landingpage.hoc'

const RegisterComponent = (props) => {
    return (
        <LandingPageHOC>
                    <h2 className="m-heading">REGISTER</h2>
                    <div className="flex-col-container">
                        <input type="text" placeholder="Username" className="flex-col-items"/>
                        <input type="email" placeholder="Email" className="flex-col-items"/>
                        <input type="password" placeholder="Password" className="flex-col-items"/>
                        <input type="password" placeholder="Confirm Password" className="flex-col-items"/>
                        <div className="btn-flexbox">
                        <button className="btn btn-dark flex-col-items">REGISTER</button>
                        <button className="btn btn-dark flex-col-items" onClick={() => props.onLogIn()}>BACK TO LOGIN</button>
                        </div>
                    </div>
        </LandingPageHOC>
    )
}

export default RegisterComponent;
