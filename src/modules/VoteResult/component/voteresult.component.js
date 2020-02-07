import React from 'react'
import Menu from '../../shared/menu.hoc';

const VoteresultComponent = (props) => {
    return (
        <>
            <Menu />
            <div className="vote-result text-center">
                <div className="container">
                    <h2 className="m-heading">Live Result</h2>
                    <div className="flex-col-container">

                        {
                            props.Result.map(lang => {
                                const lang_name = lang.lang_name;
                                const lang_votes = lang.lang_votes;
                        
                                return (
                                    <div className="box-result" key={lang.lang_name}>
                                        <h3 className="s-heading">{lang_name}</h3>
                                        <div className="progress-box">
                                            <div className="progress" id={lang_name.toLowerCase()} style={{ width: `${lang_votes*2}%` }}></div>
                                            <span className="dark-text">{lang_votes} Votes</span>
                                        </div>
                                    </div>
                                )
                            }

                            )}

                    </div>
                </div>
            </div >
        </>

    )
}

export default VoteresultComponent;

