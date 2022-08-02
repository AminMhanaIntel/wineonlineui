import React from 'react';

import { Form, FormGroup, Label, Input, FormFeedback, Button, Row, Col, FormText } from 'reactstrap';

import classNames from 'classnames';

const PersonalDetails = props => {

    const Continue = e => {
        e.preventDefault();
        if(props.userInfo.phone !== '' && props.userInfo.phone.length >= 10 && props.userInfo.address !== '')
            props.nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        props.prevStep();
    }

    const checkPhoneNumber = e => {
        if (e.key !== 'Backspace' && !/[0-9\\b]+/.test(e.key)) {
            e.preventDefault();
          }
    }

    return (
        <Form id=''>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="PhoneNumber">
                            Phone Number
                        </Label>
                        <Input
                            id="PhoneNumber"
                            name="phone"
                            placeholder='phone number'
                            type='text'
                            onKeyDown={checkPhoneNumber}
                            value={props.userInfo.phone}
                            onChange={props.handleChange}
                            required
                            minLength={10}
                            maxLength={10}
                            invalid={!props.inputValidateStates.phone}
                            />
                        <FormText hidden={!props.inputValidateStates.phone}>Phone number must consist of 10 numbers</FormText>
                        <FormFeedback invalid={props.inputValidateStates.phone ? "false" : undefined}>phone number is required and must be 10 numbers</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="Address">
                            Address
                        </Label>
                        <Input
                            id="Address"
                            name="address"
                            placeholder='Enter your address'
                            type='text'
                            value={props.userInfo.address}
                            onChange={props.handleChange}
                            required
                            invalid={!props.inputValidateStates.address}
                            />
                        <FormFeedback invalid={props.inputValidateStates.address ? "false" : undefined}>address is required</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Button onClick={Previous}>
                        Back
                    </Button>
                </Col>
                <Col md={6} className='float_right'>
                    <Button disabled={props.userInfo.phone === '' || props.userInfo.phone.length < 10 || props.userInfo.address === ''}
                            onClick={Continue}
                            className={classNames("FloatRight")}>
                        Next
                    </Button>
                </Col>
            </Row>
        </Form>
    );

}

export default PersonalDetails;