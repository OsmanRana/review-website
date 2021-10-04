import React from 'react';
import { Accordion } from 'react-bootstrap';
import useServices from '../Hook/UseServices/UseServices';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useServices();
    
    return (
        <div className = "container">
            <div className="container my-5 shadow-sm p-5 rounded-3">
                <h1 className=" fs-1 fw-bolder text-primary">All Services</h1>
            </div>
            {
                services.map(service => <ServiceDetail
                key = {service.id}
                service = {service}
                /> )
            }
            
        </div>
    );
};

export default Services;