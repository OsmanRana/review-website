import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className = "my-5">
            <h1>404: Page not Found</h1>
            <Link to = "/home"><Button>Home</Button></Link>
        </div>
    );
};

export default PageNotFound;