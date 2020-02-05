import React from 'react'
import { Switch,Route,Redirect } from "react-router-dom";
import LoginContainer from "./modules/Login/container/login.container";
import VotePanelContainer from './modules/VotePanel/container/votepanel.container';
import RegisterContainer from './modules/Register/container/register.container';
import PrivateRoutes from './private_routes';
import VoteresultContainer from './modules/VoteResult/container/voteresult.container';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginContainer}>
                <Redirect to="/login" />
            </Route>
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <PrivateRoutes path="/vote-panel" component = {VotePanelContainer} />
            <PrivateRoutes path="/vote-result" component = {VoteresultContainer} />
        </Switch>
    )  
}

export default Routes;
