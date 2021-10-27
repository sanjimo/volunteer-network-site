import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="mb-0 bg-dark w-100">
            <div className="bg-dark text-dark ps-2 pe-2">
                <Row className="pt-4 text-white" lg={3} xs={1}>
                    <Col className=" text-white text-start">
                        <h5 className="fw-bold">Volunteer Network</h5>
                        <p>House #6 , Road-2</p>
                        <p>Dhaka, Bangladesh</p>
                    </Col>
                    <Col className=" text-white text-center mb-3">
                        <h5 className="fw-bold">FOLLOW US</h5>
                        <div className="d-flex inline pt-2 ps-2 justify-content-center">
                            <i className="fab fa-facebook pe-2 ps-2 fs-2 text-white"></i>
                            <i className="fab fa-instagram pe-2 ps-2 fs-2 text-white"></i>
                            <i className="fab fa-youtube pe-2 ps-2 fs-2  text-white"></i>
                        </div>
                    </Col>
                    <Col className=" text-white text-end">
                        <h5 className="fw-bold">CONTACT US</h5>
                        <p className="text-white"><i className="fas fa-phone-alt  text-dark"></i> 
                        +833-319-1577</p>
                        <p className="text-white"><i className="far fa-envelope  text-dark"></i> volunteer_network@gmail.com</p>
                        <p>24 hours (seven days a week)</p>
                    </Col>
                </Row>
            </div>
            <Container>
                <Row className="mt-1">
                    <Col><small className="text-light">Copyright <i className="far fa-copyright text-light"></i> 2021 by Volunteer Network.</small></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;