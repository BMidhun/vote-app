import React from 'react'
import VoteresultComponent from '../component/voteresult.component'
import menuHOC from '../../shared/menu.hoc';

const VoteresultContainer = () => {
    return (
        <VoteresultComponent />
    )
}

export default menuHOC(VoteresultContainer);
