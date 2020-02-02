import React from 'react'

const data = [ 'java','php','dotnet','c','javascript' ];

const VotePanelComponent = (props) => {

    const renderCanidates = () => {

        return <> 
                    <h2 className="l-heading text-center">Vote your Language</h2>
                    <div className="flex-col-container">
                        {data.map((lang,index) => {

                            return <div key={`${lang}-${index}`} 
                                        id={`${lang}`} 
                                        className="lang-item"
                                        onClick = {() => {props.onVote(lang)}}
                                        >
                                        <h3 className="m-heading">
                                            {lang.toUpperCase()}
                                        </h3>
                                    </div>
                        }) }
                   </div>

               </>
    }

    const renderResult = () => {
        return <> 
                <h2 className="l-heading text-center">You Have Voted For</h2>
                <div className="flex-col-container">
                <div id={`${props.result}`} className="lang-item" >
                    <h3 className="m-heading">
                    {props.result.toUpperCase()}
                    </h3>
                </div>
                </div>
               </>
    }

    return (
        <div className="vote-panel">
            <div className="container">
                
                
                    {props.isResult ? renderResult() : renderCanidates()}
                </div>
            </div>
        
    )
}

export default VotePanelComponent;
