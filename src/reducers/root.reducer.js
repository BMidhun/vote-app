import { combineReducers } from "redux";    
import userDBReducer from './userdb.reducer'
import userReducer from './user.reducer'
// import voteReducer from './vote.reducer'

const rootReducer = combineReducers({
    userDBReducer,
    userReducer
});


export default rootReducer