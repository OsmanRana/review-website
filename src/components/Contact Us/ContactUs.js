import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <>
            <div className="container mt-5 my-5 shadow p-5 rounded-3">
                <div>
                    <h1 className="text-primary">We’re Here to Help You</h1>
                    <p>We always want to hear from you! Let us know how we can best help you and we'll do our very best</p>
                </div>
                {/* Contact Form */}
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
                {/* Contact Address */}
                <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-3 justify-content-center align-items-center mt-5 shadow-sm p-5 rounded-3">
                    <div className="col">
                        <i className="fas fa-map-marker-alt text-primary my-3"></i>
                        <h4 className="">Address</h4>
                        <p>350 Baganbari<br /> Brahmanbaria-3400</p>

                    </div>
                    <div className="col">
                        <iframe className="img-fluid" title="Inception Academic Care" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.537907185019!2d91.10469691543418!3d23.976775186006577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375405bcd45464f7%3A0xcfad55fb2934e273!2sJubilee%20Road%2C%20Brahmanbaria!5e0!3m2!1sen!2sbd!4v1633341460017!5m2!1sen!2sbd" ></iframe>
                    </div>
                    <div className="col">
                        <i className="fas fa-mobile-alt"></i>
                        <p> 01765088482</p>
                        <i className="far fa-envelope"></i>
                        <p> osmancmc@yahoo.com</p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default ContactUs;