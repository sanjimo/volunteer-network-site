import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/404.png';

const NotFound = () => {
    return (
        <div className="mt-5 mb-5 vh-90">
            <img src={img} alt="notfound" className="img-fluid  border-0 rounded-2 shadow-lg mx-auto d-block w-50" />
            <NavLink to="/home" className="mt-4 btn btn-outline-info text-dark fs-5 fw-bold text-decoration-none">Back to <span className="text-danger">Home</span></NavLink>
        </div>
    );
};

export default NotFound;