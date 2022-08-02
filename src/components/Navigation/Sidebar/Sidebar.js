import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faCartShopping,
  faXmark

} from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { NavLink as RRNavLink } from "react-router-dom";

import wineOnlineLogo from '../../../assets/wineonlineimg.png';

import './Sidebar.css';


const Sidebar = props => {

  const authErrorToast = () => toast("please sign up first");

    return (
        <div className={classNames("sidebar", { "is-open": props.isOpen })}>
        <div className="sidebar-header">
          <span color="info" onClick={props.toggle} style={{ color: "#fff" }}>
            &times;
          </span>
          <img className="logo_size" src={wineOnlineLogo} alt="wine online" />
        </div>
        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3">
            <p>Welcome to Wine Online</p>
            {!props.isAuthenticated ?
              <NavItem>
              <NavLink tag={RRNavLink} activeClassName="active" to={"/signup"}>
                <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                Signup
              </NavLink>
            </NavItem>
              : null}
            {props.isAuthenticated ? 
            <React.Fragment>
                        <NavItem>
                        <NavLink tag={RRNavLink} activeClassName="active" to={"/shopping"}>
                          <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                          Start Shopping
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={RRNavLink} activeClassName="active" to={"/feedback"}>
                          <FontAwesomeIcon icon={faXmark} className="mr-2" />
                          Feedback
                        </NavLink>
                      </NavItem>
             </React.Fragment>
            : 
            <React.Fragment>
                      <NavItem>
                      <NavLink onClick={authErrorToast}>
                        <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                        Start Shopping
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={authErrorToast}>
                        <FontAwesomeIcon icon={faXmark} className="mr-2" />
                        Feedback
                      </NavLink>
                    </NavItem>
              </React.Fragment>
            }
          </Nav>
        </div>
      </div>
    );
}

export default Sidebar;