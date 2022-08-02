import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavbarText } from "reactstrap";

import './Topbar.css';
import classNames from 'classnames';


const Topbar = props => {
    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
    
    return (
        <Navbar
            className={classNames('top_bar_navbar')}
            color='light'
            light
            expand='md'
            container='fluid'
        >
          <Button color='info' onClick={props.toggleSidebar}>
            <FontAwesomeIcon icon={faAlignLeft} />
          </Button>       
          <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="m-auto" navbar>
          <NavItem className={classNames('top_bar_nav_item')}>
            WINE ONLINE
          </NavItem>
        </Nav>
        <NavbarText className={classNames('top_bar_username')}>
          {
            props.isAuthenticated ? `Hello ${props.userInfo.firstName} ${props.userInfo.lastName}` : 'Hello'
          }</NavbarText>
      </Collapse>
        </Navbar>
    );
}

export default Topbar