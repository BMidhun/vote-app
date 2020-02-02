import React from 'react'
import { Switch,Route } from "react-router-dom";
import LoginContainer from "./modules/Login/container/login.container";
import VotePanelContainer from './modules/VotePanel/container/votepanel.container';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginContainer}/>
            <Route path="/vote-panel" component = {VotePanelContainer} />
        </Switch>
    )  
}

export default Routes;
