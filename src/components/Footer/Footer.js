import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="container">
<hr/>
            <footer className="container row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-3 align-items-center my-5" collapseonselect="true" expand="lg">
                {/* column -1 */}
                
                <div className="col">
                    <img style={{ width: "50px" }} src={logo} alt="" />
                </div>
                {/* column -2 */}
                <div className="col">
                    <small className="text-muted"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2021 Inception Academic Care </small>
                </div>
                {/* column -3 */}
                <div className="col">
                    
                    <a href = "https://www.facebook.com/InceptionAcademicCare" rel ="noreferrer" target = "_blank"><i className="me-3 fab fa-facebook"></i></a>
                    <a href = "https://www.twitter.com" rel ="noreferrer" target = "_blank"><i className="me-3 fab fa-twitter"></i></a>
                    <a href = "https://www.instagram.com" rel ="noreferrer" target = "_blank"><i className="fab fa-instagram"></i></a>
                    
                    
                </div>

            </footer>
        </div>
    );
};

export default Footer;
