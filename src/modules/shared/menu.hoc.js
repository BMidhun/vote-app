import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBooth,
  faPoll,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import {connect} from 'react-redux';

import {Link} from 'react-router-dom'
import {Logout} from '../../actions/user.actions'



function Menu(props) {

  const [show,setShow] = React.useState(false)


  const onLogout = () => {
    const User = props.state.userReducer;
    console.log(User)
    User.auth = false;
    props.Logout(User);
  }

  return (
    <div className="menu">
            <button onClick={()=>{setShow(prev=>!prev)}}>V</button>
            <div className={show ? "menu-dropdown" : "hide"}>
             <Link to="/vote-panel">
              <div className="menu-list">
                <FontAwesomeIcon icon={faPersonBooth} size="2x" />
                <h3>Vote-Panel</h3>
              </div>
              </Link>
              
              <Link to="/vote-result">
              <div className="menu-list">
                <FontAwesomeIcon icon={faPoll} size="2x" />
                <h3>Vote-Result</h3>
              </div>
              </Link>

            <Link to="/login" onClick={onLogout}>
              <div className="menu-list">
                <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
                <h3>Logout</h3>
              </div>
              </Link>
            </div>
       </div>
  )
}

const mapStateToProps = (state) => {
  return {state}
}

const mapDispatchToProps = (dispatch) => {
   return {Logout : (a) => dispatch(Logout(a))}
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu)



/*  

  <div className="menu">
            <button onClick={this.HideNav}>V</button>
            <div className={this.state.show ? "menu-dropdown" : "hide"}>
             <Link to="/vote-panel">
              <div className="menu-list">
                <FontAwesomeIcon icon={faPersonBooth} size="2x" />
                <h3>Vote-Panel</h3>
              </div>
              </Link>
              
              <Link to="/vote-result">
              <div className="menu-list">
                <FontAwesomeIcon icon={faPoll} size="2x" />
                <h3>Vote-Result</h3>
              </div>
              </Link>

            <Link to="/login" onClick={this.onLogout}>
              <div className="menu-list">
                <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
                <h3>Logout</h3>
              </div>
              </Link>
            </div>
          </div>



*/