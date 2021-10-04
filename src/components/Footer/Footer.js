import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="container">
            
            <footer className="container row align-items-center my-5" collapseonselect="true" expand="lg">
                {/* column -1 */}
                <hr/>
                <div className="col">
                    <img style={{ width: "50px" }} src={logo} alt="" />
                </div>
                {/* column -2 */}
                <div className="col">
                    <small className="text-muted"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2021 Inception Academic Care </small>
                </div>
                {/* column -3 */}
                <div className="col">
                    <i className="me-3 fab fa-facebook"></i>
                    <i className="me-3 fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>

            </footer>
        </div>
    );
};

export default Footer;