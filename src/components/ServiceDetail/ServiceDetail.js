import React from 'react';
import { Accordion } from 'react-bootstrap';

const ServiceDetail = (props) => {
const {name, detail, tuition_fee} = props.service;
    return (
        <div>
            <Accordion className = "my-2">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{name}</Accordion.Header>
                    <Accordion.Body>
                        <h4>{detail}</h4>
                        <p>Fees: {tuition_fee}</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default ServiceDetail;