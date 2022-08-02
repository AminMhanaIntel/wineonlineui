import React, { useEffect, useRef, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import User from '../../models/user';

import './Signup.css';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import UserDetails from '../../components/SignupComponents/UserDetails/UserDetails';
import PersonalDetails from '../../components/SignupComponents/PersonalDetails/PersonalDetails';
import Confirmation from '../../components/SignupComponents/Confirmation/Confirmation';


const SignupPage = props => {
    const { onTrySignUp } = props;
    const [currentStep, setCurrentStep] = useState(1);
    const [currentUserInfo, setCurrentUserInfo] = useState(new User(
        '',
        '',
        '',
        ''
    ));
    const [inputValidateStates, setInputValidateStates] = useState({
       firstName: true,
       lastName: true,
       phone: true,
       address: true
    });
    const prevStepRef = useRef();

    useEffect(() => {
        if(currentStep === 4){
            onTrySignUp(currentUserInfo);
        }
    }, [currentStep, currentUserInfo, onTrySignUp]);

    useEffect(() => {
        prevStepRef.current = currentStep;
    }, [currentStep]);

    const prevStep = () => {
        const step = prevStepRef.current;
        setCurrentStep(step - 1);
    }

    const nextStep = () => {
        const step = prevStepRef.current;
        setCurrentStep(step + 1);
    }

    const handleChange = e => {
        setCurrentUserInfo({ ...currentUserInfo, [e.target.name]: e.target.value });
        if(e.target.value !== ''){
            setInputValidateStates({ ...inputValidateStates, [e.target.name]: true});
        }
        else{
            setInputValidateStates({ ...inputValidateStates, [e.target.name]: false});
        }
    }

    let currentView = null;

    switch(currentStep) {
        case 1:
            currentView = <UserDetails nextStep={nextStep} handleChange={handleChange} userInfo={currentUserInfo} inputValidateStates={inputValidateStates} />;
            break;
        case 2:
            currentView = <PersonalDetails nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} userInfo={currentUserInfo} inputValidateStates={inputValidateStates} />;
            break;
        case 3:
            currentView = <Confirmation nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} userInfo={currentUserInfo} />;
            break;
        default:
    }

    return (
        <div className="signup_container">
            <Card 
                className="my-2"
                color="dark"
                outline
                style={{
                  width: '48rem'
                }}>
                <CardHeader>
                    <CardTitle>
                        Sign Up Wizard
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    {currentView}
                </CardBody>
            </Card>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      onTrySignUp: (userInfo) => dispatch(actions.authSignup(userInfo))
    }
  }

export default connect(null, mapDispatchToProps)(SignupPage);