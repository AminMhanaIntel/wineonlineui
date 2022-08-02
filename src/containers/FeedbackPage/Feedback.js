import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import { Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap';

import './Feedback.css';


const FeedbackPage = props => {

    const logOut = () => {
        props.Signout();
    }

    return (
        <div className="feedback_container">
            <Card 
                className="my-2"
                color="dark"
                outline
                style={{
                  width: '48rem'
                }}>
                <CardHeader>
                    <CardTitle>
                        Reset Information
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <Button onClick={logOut}>Click me in order to reset user information</Button>
                </CardBody>
            </Card>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      Signout: () => dispatch(actions.logout())
    }
  }

export default connect(null, mapDispatchToProps)(FeedbackPage);