import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import image from '../../images/29493.jpg'
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <div>
                <img className="img-fluid my-5" src={image} alt="" />
            </div>
            <div className="container my-5 shadow-sm p-5 rounded-3">
                <h1 className=" fs-1 fw-bolder text-primary">Our Main Services</h1>
            </div>
            <div className ="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;