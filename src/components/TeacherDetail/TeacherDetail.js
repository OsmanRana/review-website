import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TeacherDetail = () => {
    return (
        <div className="container p-5 my-5 shadow-sm border-0 rounded-3 text-secondary">
            <h2>Teachers details will be available soon!!!!</h2>
            <div className ="my-5 row row-cols-1 row-cols-sm-1 row-cols-md-4 row-cols-lg-4">
                <Link className=" my-3" to="/home"><Button>Home</Button></Link>
                <Link className=" my-3" to="/services"><Button>Services</Button></Link>
                <Link className=" my-3" to="/about"><Button>About Us</Button></Link>
                <Link className=" my-3" to="/contact"><Button>Contact Us</Button></Link>
            </div>
        </div>
    );
};

export default TeacherDetail;