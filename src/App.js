
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import * as actions from './store/actions/index';

import Sidebar from './components/Navigation/Sidebar/Sidebar';
import Content from './components/Navigation/Content/Content';

import './App.css';
import './shared/SharedStyles.css';


const App = props => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const { onTryAutoLogin } = props;

  useEffect(() => {
    onTryAutoLogin();
  }, [onTryAutoLogin]);

  return (
      <div className="App wrapper">
        <Sidebar toggle={toggleSidebar} isAuthenticated={props.isAuthenticated} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} isAuthenticated={props.isAuthenticated} userInfo={props.userInfo} sidebarIsOpen={sidebarIsOpen} />
        <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>
  );

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.userInfo !== null,
    userInfo: state.auth.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(actions.authCheck())
  }
}

export default 
                connect(
                  mapStateToProps,
                  mapDispatchToProps)(App);
