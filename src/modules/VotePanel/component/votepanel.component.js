import React from 'react'
import Menu from '../../shared/menu.hoc';




const VotePanelComponent = (props) => {

    const renderCanidates = (Data) => {

        return   Data.map((lang, index) => {

                const lang_name = lang.lang_name;
                const lang_votes = lang.lang_votes

                return <div key={`${lang_name}-${index}`}
                    id={`${lang_name.toLowerCase()}`}
                    className="lang-item"
                    onClick = {() => {props.onVote(lang)}}
                >
                    <h3 className="m-heading">
                        {lang_name.toUpperCase()}
                    </h3>

                    <h3 className="m-heading">{lang_votes}</h3>
                </div>
            })
        }


    return (
        <>
            <Menu />
            <div className="vote-panel">
                <div className="container">
                    <h2 className="l-heading text-center">Vote your Language</h2>
                    <div className="flex-col-container">
                        {renderCanidates(props.voteData)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VotePanelComponent;


    // const renderResult = () => {
    //     return <> 
    //             <h2 className="l-heading text-center">You Have Voted For</h2>
    //             <div className="flex-col-container">
    //             <div id={`${props.result}`} className="lang-item" >
    //                 <h3 className="m-heading">
    //                 {props.result.toUpperCase()}
    //                 </h3>
    //             </div>
    //             </div>
    //            </>
    // }