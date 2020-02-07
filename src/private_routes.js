import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import AppStorage from './modules/utils/storage';

const PrivateRoutes = ({component:Component,log, ...rprops}) => {
    console.log(log,rprops)
    return (
        <Route {...rprops} render={(cprops) => {
    
                console.log(AppStorage.get())
                let pathName = cprops.match.path;
                let returnProps = {...rprops,...cprops}
                if(!AppStorage.get() && (pathName === "/"))
                {
                        return <Redirect to="/login"/>
                }
                else if (AppStorage.get() && (pathName === "/" || pathName ==="/login")) {
                   
                   return <Redirect to="/vote-panel"/>
                } 

                else if(!AppStorage.get() && !(pathName === "/" || pathName ==="/login"))
                    return <Redirect to="/login"/>
            
                 return <Component props={returnProps} />
                
            }}/>
    )
}

const mapStateToProps = (state) => {
    return {log : state}
}

export default connect(mapStateToProps,null)(PrivateRoutes);
