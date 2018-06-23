import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './Contact.css';
import Connect from "../../components/Connect"

class Contact extends Component {
    render() {
        return (
            <Container>
                {/* <!--this row adds space above entry area--> */}
                <Row id="toprow"></Row>
                <Row>
                    <Col size="md-8" other="main-column">
                        <h2>Contact</h2>
                        <div className="form-row">
                            {/* <!--this column will hold the email input form--> */}
                            <div className="form-group col-10">
                                <div className="form-row">
                                    <label for="inputName">Name</label>
                                    <input type="email" className="form-control" id="inputName" placeholder="John Smith" />
                                </div>
                                <div className="form-row">
                                    <label for="inputEmail">Email</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="example@gmail.com" />
                                </div>
                                <div className="form-row">
                                    <label for="inputMessage">Message</label>
                                    <input type="email" className="form-control" id="inputMessage" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        {/* <!-- adds space between end of input fields and box--> */}
                        <div className="form-group col-2"></div>
                    </Col>

                    <Col size="md-4">
                        <Connect />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;