import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './About.css';
import Connect from "../../components/Connect"
import Mytools from "../../components/Mytools"
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

class About extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row />
                    <Row />
                    <Row />
                    <Row >
                        <Col size="md-8" other="main-column">
                            <h2>About Me</h2>
                            <img id="myfoto" src="./assets/images/CoolPicMe.jpg" className="rounded float-left" alt="Antony Laroche" width="200" />
                            <article> <p>I have a Bachelor's degree in Chemical Engineering from the University of Florida and a Master's in Engineering
                                Management from the George Washington University. I have spent the last 18 years working in the refining
                                industry in a wide variety of roles ranging from process engineering to project development and refinery
                        economics.</p>
                            </article>
                            <article><p>I have a passion for finance and economics. As a result, I spend a
                            lot of my spare time reading and analyzing the financial news of the day. I take pleasure in deciphering insights from the wealth of data available to us from news outlets and government agencies with the ultimate
                    goal of converting those insight to personal investment strategies and general worldly advice.</p>
                            </article>
                            <article><p>I am a Full Stack Web Developer who can turn flat content into engaging, smart, web applications.
                                I use my skills to share wisdom, insights and knowledge with the world. I look forward to helping you share your expertise with others through fully deployed websites that engage readers through interactive content,
                        data collection and analysis.</p>
                            </article>
                        </Col>
                        <Col size="md-4">
                            {/* <!--contact card column--> */}
                            <Connect />
                            <Mytools />
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default About;
