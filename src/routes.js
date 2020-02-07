import React from 'react'
import { Switch,Redirect} from "react-router-dom";
import LoginContainer from "./modules/Login/container/login.container";
import VotePanelContainer from './modules/VotePanel/container/votepanel.container';
import PrivateRoutes from './private_routes';
import VoteresultContainer from './modules/VoteResult/container/voteresult.container';
import AppStorage from './modules/utils/storage';

const Routes = (props) => {
    
    return (
        <Switch>
            <PrivateRoutes path="/" exact component={LoginContainer}/>
            <PrivateRoutes path="/login" component={LoginContainer} />
            <PrivateRoutes path="/vote-panel" component = {VotePanelContainer} />
            <PrivateRoutes path="/vote-result" component = {VoteresultContainer} />
            {/* <Redirect from="*" to="/login" push /> */}
        </Switch>
    )  
}

export default Routes;
