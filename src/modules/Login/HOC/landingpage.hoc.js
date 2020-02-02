import React from 'react'

const LandingPageHOC = (props) => {
    return (
       <div className="login-page text-center">
            <div className="container">
                 <h1 className="l-heading"> 
                    <span className="spl-text">CAST</span> YOUR VOTES
                </h1>
                <div className="login-box">

                    {props.children}
                </div>
                </div>
        </div>
    )
}

export default LandingPageHOC;
