import { combineReducers } from "redux"; 
import { connectRouter } from 'connected-react-router'   
import userReducer from './user.reducer'
import voteReducer from './vote.reducer'

const rootReducer = (history) => combineReducers({
    router : connectRouter(history),
    userReducer : userReducer,
    voteReducer : voteReducer
});


export default rootReducer