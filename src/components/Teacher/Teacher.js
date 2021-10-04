import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Teacher = (props) => {
    const { ID, name, image, subject, designation } = props.teacher;
    return (
        <div>
            {/* Teacher Card */}
            <Card className="my-3 shadow-sm border-0 rounded-3">
                <Card.Img variant="top" className="img-fluid my-3 mx-auto d-block rounded-circle" src={image} alt="" style={{ width: "150px", height: "150px" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{designation}</p>
                    <Card.Text>
                        <span className = "fw-bold">{subject}</span>
                    </Card.Text>
                    <Link to={`/teacher/${ID}`}><Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Teacher;