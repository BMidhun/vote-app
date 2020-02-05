import React from 'react'
import {Route} from 'react-router-dom'
import { connect } from "react-redux";

const PrivateRoutes = ({component:Component,log, ...rprops}) => {
    console.log(log)
    return (
        <Route {...rprops} render={(cprops) => {
                
                let returnProps = {...rprops,...cprops}
                return <Component {...returnProps}/>
            }}/>
    )
}

const mapStateToProps = (state) => {
    return {log : state}
}

export default connect(mapStateToProps,null)(PrivateRoutes);
