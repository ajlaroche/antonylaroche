import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './Contact.css';
import Connect from "../../components/Connect";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

class Contact extends Component {

    state = {
        name: "",
        email: "",
        message: "",
        response: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.validateEmail(this.state.email) && this.state.message) {
            API.sendMessage({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
                .then(res => this.setState({
                    name: "",
                    email: "",
                    message: "",
                    response: "Message successfully sent"
                }))
                .catch(err => console.log(err));

        }
    };

    render() {
        return (
            <div>
                <Nav />
                <Container>
                    {/* <!--this row adds space above entry area--> */}
                    <Row id="toprow"></Row>
                    <Row>
                        <Col size="md-8" other="main-column">
                            <h2>Contact</h2>
                            <form>
                                {/* <!--this column will hold the email input form--> */}
                                <label>Name</label>
                                <Input
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    placeholder="John Smith"
                                />
                                <label>Email</label>
                                <Input
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                />
                                <label>Message</label>
                                <TextArea
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                    name="message"
                                />
                                <FormBtn
                                    disabled={!(this.state.name && this.validateEmail(this.state.email) && this.state.message)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Submit
                                </FormBtn>

                            </form>
                            <h5>{this.state.response}</h5>

                        </Col>

                        <Col size="md-4">
                            <Connect />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Contact;