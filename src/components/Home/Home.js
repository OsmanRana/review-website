import React from 'react';
import image from '../../images/29493.jpg'

const Home = () => {
    return (
        <div className = "container">
            <div>
                <img className="img-fluid" src={image} alt="" />
            </div>
            <div className="container my-5">
                <h1 className =" fs-1 fw-bolder">Our Main Services</h1>
            </div>
        </div>
    );
};

export default Home;