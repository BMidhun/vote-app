import React from 'react'

const VoteresultComponent = () => {
    return (
        <div className="vote-result text-center">
            <div className="container">
                <h2 className="m-heading">Live Result</h2>
                <div className="flex-col-container">
                    <div className="box-result">
                        <h3 className="s-heading">Java</h3>
                        <div className="progress-box">
                        <div className="progress" style={{width:`${45}%`}}></div>
                        <span className="dark-text">74 Votes</span>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VoteresultComponent;
