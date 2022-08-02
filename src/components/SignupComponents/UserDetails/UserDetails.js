import React from 'react';

import { Form, FormGroup, Label, Input, FormFeedback, Button, Row, Col } from 'reactstrap';

import classNames from 'classnames';

const UserDetails = props => {

    const Continue = e => {
        e.preventDefault();
        if(props.userInfo.firstName !== '' && props.userInfo.lastName !== '')
            props.nextStep();
    }


    return (
        <Form>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="FirstName">
                            First Name
                        </Label>
                        <Input
                            id="FirstName"
                            name="firstName"
                            placeholder='Enter your first name'
                            type='text'
                            value={props.userInfo.firstName}
                            onChange={props.handleChange}
                            required
                            invalid={!props.inputValidateStates.firstName}
                            />
                        <FormFeedback invalid={props.inputValidateStates.firstName ? "false" : undefined}>first name is required</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="LastName">
                            Last Name
                        </Label>
                        <Input
                            id="LastName"
                            name="lastName"
                            placeholder='Enter your last name'
                            type='text'
                            value={props.userInfo.lastName}
                            onChange={props.handleChange}
                            required
                            invalid={!props.inputValidateStates.lastName}
                            />
                        <FormFeedback invalid={props.inputValidateStates.lastName ? "false" : undefined}>last name is required</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Button disabled={props.userInfo.firstName === '' || props.userInfo.lastName === ''}
                    onClick={Continue}
                    className={classNames("FloatRight")}>
                        Next
                    </Button>
                </Col>
            </Row>
        </Form>
    );

}

export default UserDetails;