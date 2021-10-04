import React from 'react';
import { Carousel } from 'react-bootstrap';
import image2 from '../../images/image2.jpg'
import image from '../../images/29493.jpg'
import useServices from '../Hook/UseServices/UseServices';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useServices();

    return (
        <div className="container">
            {/* Image Slider */}
            <div>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img    style = {{height: "370px"}}
                            className="d-block w-100 mt-5"
                            src={image}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img   style = {{height: "370px"}}
                            className="d-block w-100 mt-5"
                            src={image2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
            
                </Carousel>
            </div>
            <div className="container my-5 shadow-sm p-5 rounded-3">
                <h1 className=" fs-1 fw-bolder text-primary">Our Main Services</h1>
            </div>
            {/* Main Services */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                {
                    services.slice(0, 4).map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;