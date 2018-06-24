import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './Contact.css';
import Connect from "../../components/Connect";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Contact extends Component {

    state = {
        name: "",
        email: "",
        message: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.email && this.state.message) {
        //   API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        }
      };

    render() {
        return (
            <Container>
                {/* <!--this row adds space above entry area--> */}
                <Row id="toprow"></Row>
                <Row>
                    <Col size="md-8" other="main-column">
                        <h2>Contact</h2>
                        <form>
                            {/* <!--this column will hold the email input form--> */}
                            <label for="inputName">Name</label>
                            <Input
                                value={this.state.name}
                                onchange={this.handleInputChange}
                                name="name"
                                placeholder="John Smith"
                            />
                            <label for="inputEmail">Email</label>
                            <Input
                                value={this.state.email}
                                onchange={this.handleInputChange}
                                name="email"
                                placeholder="example@gmail.com"
                            />
                            <label for="inputMessage">Message</label>
                            <TextArea
                                value={this.state.message}
                                onchange={this.handleInputChange}
                                name="message"
                            />
                            <FormBtn
                                disabled={!(this.state.name && this.state.email && this.state.message)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit
                                </FormBtn>
                        </form>
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