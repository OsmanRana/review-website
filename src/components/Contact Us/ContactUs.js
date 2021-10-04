import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <>
            <div className="container mt-5  my-5 shadow p-5 rounded-3">
                <div>
                    <h1 className="text-primary">We’re Here to Help You</h1>
                    <p>We always want to hear from you! Let us know how we can best help you and we'll do our very best</p>
                </div>
                <div>
                    <Form className="mt-5">
                        <Form.Group className=" mb-3 gap-4" controlId="exampleForm.ControlInput1">
                            <Form.Control className="my-3" type="text" placeholder="Full Name" />
                            <Form.Control type="email" placeholder="Email: name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Tell us a few words" rows={3} />
                        </Form.Group>
                    </Form>
                </div>
                <div className="d-grid">
                    <Button variant="primary" size="lg">
                        Send Your Message
                    </Button>
                </div>
                <div className="mt-5 shadow-sm p-5 rounded-3">
                    <div>
                        <i className="fas fa-map-marker-alt text-primary my-3"></i>
                        <h4 className ="">Address</h4>
                        <p>350 Baganbari,<br/> Brahmanbaria</p>
                         <p className="fas fa-mobile-alt"> 01765088482</p>
                         <br/>
                        <p className ="far fa-envelope"> osmancmc@yahoo.com</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ContactUs;