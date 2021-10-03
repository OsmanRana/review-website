import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className=""
        style={{
            background: "#F5F5F5",
            width: "100%",
            height: "150px",
            position: "absolute",
            bottom: 0,
            left: 0
        }} >
            <footer
                
                className="container"
                collapseonselect="true" expand="lg">

                <div className="mt-4">
                    <img style={{ width: "50px" }} src={logo} alt="" />
                </div>
                <div>
                    <small className="text-muted"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2021 Inception Academic Care </small>
                </div>
                <div className="">
                    <i className="me-3 fab fa-facebook"></i>
                    <i className="me-3 fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>

            </footer>
        </div>
    );
};

export default Footer;