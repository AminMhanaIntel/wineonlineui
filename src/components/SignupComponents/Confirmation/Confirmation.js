import React from 'react';

import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Row, Col } from 'reactstrap';

import { UserToView }  from '../../../models/user';

import classNames from 'classnames';

const Confirmation = props => {

    const Previous = e => {
        e.preventDefault();
        props.prevStep();
    }

    const Continue = e => {
        e.preventDefault();
        if(props.userInfo.firstName !== '' && props.userInfo.lastName !== '')
            props.nextStep();
    }

    const userInfoHeadings = Object.keys(props.userInfo).map((key, index) => {
        return (
            <ListGroupItem key={key}>
            <ListGroupItemHeading>
                {UserToView[key]}
            </ListGroupItemHeading>
            <ListGroupItemText>
                {props.userInfo[key]}
            </ListGroupItemText>
        </ListGroupItem>
        );
    });


    return (
        <React.Fragment>
            <ListGroup>
                {userInfoHeadings}
            </ListGroup>
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
                        Confirm & Save
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );

}

export default Confirmation;