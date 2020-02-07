import React from 'react'
import VoteresultComponent from '../component/voteresult.component'
import { connect } from "react-redux";

const VoteresultContainer = (props) => {
    let Result = props.voteReducer.votedata
    return (
        <VoteresultComponent Result = {Result} />
    )
}

const mapStateToProps = (state) => {return state}

export default connect(mapStateToProps,null)(VoteresultContainer);
