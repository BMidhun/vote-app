import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';
import { connect } from "react-redux";
import loadUserDb from './actions/userdb.actions';


const App = (props) => {

    const loadDb = props.loadDb

    React.useEffect(() => {

        const loadUserDb = () => {loadDb()}

        loadUserDb()
    },[loadDb])

    React.useEffect(() => {console.log(props)},[props])

return (
    
      <BrowserRouter>
            <Routes />
         </BrowserRouter>
    
  
  )
}

const mapStateToProps = (state) => {

    return {userdb : state}
}

const mapDispatchToProps = (dispatch) => {

     return {

        loadDb : () => dispatch(loadUserDb())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
