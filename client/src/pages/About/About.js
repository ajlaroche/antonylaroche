import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './About.css';

class App extends Component {
    render() {
        return (
            <Container>
                <Row id="toprow" />
                <Row />
                <Col size="md-8" className="main-column">
                    <h2>About Me</h2>
                    <img id="myfoto" src="./assets/images/CoolPicMe.jpg" className="rounded float-left" alt="Antony Laroche" width="200" />
                    <article> <p>I have a Bachelor's degree in Chemical Engineering from the University of Florida and a Master's in Engineering
                        Management from the George Washington University. I have spent the last 18 years working in the refining
                        industry in a wide variety of roles ranging from process engineering to project development and refinery
                        economics.</p>
                    </article>
                    <article><p>In addition to my work as an engineer, I have a passion for finance and economics. As a result, I spend a
                    lot of my spare time reading and analyzing the financial news of the day. I take pleasure in deciphering insights from the wealth of data available to us from news outlets and government agencies with the ultimately
                    goal of converting those insight to personal investment strategies and general worldly advice.</p>
                    </article>
                    <article><p>I aspire to be a Full Stack Web Developer who is available to perform freelance work for content producers
                        who want to share their art, skills, wisdom, and knowledge with the world. I also look forward to using
                        my skills to enhance 3rd party developed websites by improving user experience, adding interactivity,
                        data collection and analysis.</p>
                    </article>
                </Col>
            </Container>
        );
    }
}

export default App;
