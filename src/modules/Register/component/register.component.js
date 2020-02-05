import React from 'react'
import LandingPageHOC from '../../Login/HOC/landingpage.hoc';
import { Link } from "react-router-dom";


const RegisterComponent = (props) => {
    let form = props.form
    return (
        <LandingPageHOC>
                    <h2 className="m-heading">REGISTER</h2>
                    <div className="flex-col-container">
                        <form onSubmit={props.onSubmitForm}>
                       
                        <input type="text" placeholder="Username" className="flex-col-items"/>
                        
                        <input type="email" placeholder="Email" className="flex-col-items"/>
                        
                        <input type="password" placeholder="Password" className="flex-col-items"/>
                       
                        <input type="password" placeholder="Confirm Password" className="flex-col-items"/>
                        
                        <div className="btn-flexbox">
                        <button className="btn btn-dark flex-col-items" type="submit">REGISTER</button>
                        <Link to="/login" className="btn btn-dark flex-col-items">  BACK TO LOGIN </Link>  
                        </div>      
                        </form>     
                    </div>
        </LandingPageHOC>
    )
}

export default RegisterComponent;
