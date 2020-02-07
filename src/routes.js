import React from 'react'
import { Switch} from "react-router-dom";
import LoginContainer from "./modules/Login/container/login.container";
import VotePanelContainer from './modules/VotePanel/container/votepanel.container';
import PrivateRoutes from './private_routes';
import VoteresultContainer from './modules/VoteResult/container/voteresult.container';

const Routes = () => {
    
    return (
        <Switch>
            <PrivateRoutes path="/" exact component={LoginContainer}/>
            <PrivateRoutes path="/login" component={LoginContainer} />
            <PrivateRoutes path="/vote-panel" component = {VotePanelContainer} />
            <PrivateRoutes path="/vote-result" component = {VoteresultContainer} />
        </Switch>
    )  
}

export default Routes;
