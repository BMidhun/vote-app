import React from 'react'
import VotePanelComponent from '../component/votepanel.component';

const VotePanelContainer = () => {
    const [isResult,setIsResult] = React.useState(false);
    const [result,setResult] = React.useState('')
    return (
        <VotePanelComponent 
        isResult = {isResult} 
        onVote = {(lang) => {setIsResult(true);setResult(lang)}}
        result = {result}
         />
    )
}

export default VotePanelContainer;
