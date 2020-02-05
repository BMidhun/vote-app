import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBooth,
  faPoll,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom'

function menuHOC(Component) {
  return class HOC extends React.Component {
    state = { show: false };

    HideNav = () => {
      console.log("Reached");
      this.setState(prev => {
        console.log(prev);
        return { show: !prev.show };
      });
    };

    render() {
      return (
        <>
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

            <Link to="/login">
              <div className="menu-list">
                <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
                <h3>Logout</h3>
              </div>
              </Link>
            </div>
          </div>

          <Component {...this.props} />
        </>
      );
    }
  };
}

export default menuHOC;
