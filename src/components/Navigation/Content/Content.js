import React from 'react';

import classNames from "classnames";
import { Container } from "reactstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import Topbar from '../Topbar/Topbar';

import './Content.css';
import ShoppingPage from '../../../containers/ShoppingPage/Shopping';
import FeedbackPage from '../../../containers/FeedbackPage/Feedback';
import SignupPage from '../../../containers/SignupPage/Signup';


const Content = props => {

    let routes = (
        <Routes>
            <Route  path="/signup" element={<SignupPage />} />
            <Route path="/" element={<Navigate to="/signup" replace />} />
            <Route path="*" element={<Navigate to="/signup" replace />} />
        </Routes>
    );
    if(props.isAuthenticated){
        routes = (
            <Routes>
                <Route  path="/shopping" element={<ShoppingPage />} />
                <Route  path="/feedback" element={<FeedbackPage />} />
                <Route path="/" element={<Navigate to="/shopping" replace />} />
                <Route path="*" element={<Navigate to="/shopping" replace />} />
            </Routes>
        );
    }
    

    return (
        <Container
        fluid
        className={classNames("content", {"is-open": props.sidebarIsOpen})}>
            <Topbar toggleSidebar={props.toggleSidebar} isAuthenticated={props.isAuthenticated} userInfo={props.userInfo}></Topbar>
            {routes}
        </Container>
    );
}

export default Content;