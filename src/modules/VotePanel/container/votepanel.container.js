import React from 'react'
import VotePanelComponent from '../component/votepanel.component';
import { connect  } from "react-redux";
import { addVotes } from '../../../actions/votes.action';
const VotePanelContainer = (props) => {
    const [voteData,setVoteData] = React.useState(props.voteReducer.votedata)
    const addVotes = props.addVotes
    const onVote = (data) => {
        const lang_votes = data.lang_votes + 1
        const Data = voteData.map(lang => {
            if(lang["lang_name"] === data.lang_name){
                lang.lang_votes = lang_votes;
            }

            return lang
        })

        setVoteData(Data)

    }

    React.useEffect(() => {
        
        addVotes(voteData)
    },[voteData,addVotes])
    return (
        <VotePanelComponent voteData={voteData} onVote={(data) => onVote(data)}/>
    )
}

const mapStateToProps = (state) => { return state}

const mapDispatchToProps = (dispatch) => {

    return {addVotes : (a) => dispatch(addVotes(a)) }
}

export default connect(mapStateToProps,mapDispatchToProps)(VotePanelContainer);
