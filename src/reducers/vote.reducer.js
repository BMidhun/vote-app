import votedata from "../data/votedata";

const intitialState = {votedata}

export default function (prevState=intitialState,action) {

        switch(action.type){

            case "ADD_VOTE": return {votedata : action.payload}

            default : return {...prevState}
        }
    
}