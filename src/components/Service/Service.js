import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, price, image } = props.service;
    return (
        <div>
            <Card className = "my-3 shadow-sm border-0 rounded-3">
                <Card.Img variant="top"  className="img-fluid my-3 mx-auto d-block" src={image} alt="" style = {{width: "auto",height: "320px"}} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       Starting From: TK. {price}
                    </Card.Text>
                    <Link to = "/services"><Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;