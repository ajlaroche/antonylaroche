import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './Portfolio.css';
import Connect from "../../components/Connect"

class Portfolio extends Component {


    render() {

        const projects = [
            { link: "https://ajlaroche.github.io/Hangman-Game/", image: "./assets/images/hangingOn.jpeg", title: "Hangman" },
            { link: "https://ajlaroche.github.io/GOT-RolePlayingGame/", image: "./assets/images/got_chair.jpg", title: "RPG Game" },
            { link: "https://ajlaroche.github.io/TriviaGame/", image: "./assets/images/Bookworm.jpeg", title: "Trivia Game" },
            { link: "https://pure-shelf-25877.herokuapp.com/", image: "./assets/images/SeeItAll.jpeg", title: "Local Ink" },
            { link: "https://ajlaroche.github.io/RPS-Multiplayer/", image: "./assets/images/DataDriven.jpeg", title: "Rock Paper Scissors" },
            { link: "https://ajlaroche.github.io/GifTheater/", image: "./assets/images/cat_stage.jpg", title: "Gif Theather" },
            { link: "https://ajl-friendfinder.herokuapp.com/", image: "./assets/images/twoFriends.jpg", title: "Friend Finder" },
            { link: "https://ajl-news-scraper.herokuapp.com/", image: "./assets/images/handspaper.jpg", title: "News Scraper" },
            { link: "https://ajlaroche.github.io/clicky-game/", image: "./assets/images/memory.png", title: "Clicky Game" },
            { link: "https://ajl-nytreact.herokuapp.com/", image: "./assets/images/nytimes.jpeg", title: "NY Times Archives" }
        ]

        return (
            <Container >
                <Row id="toprow"></Row>
                {/* <!--this row adds space above entry area--> */}
                <Row>
                    {/* <!--main content column--> */}
                    <Col size="md-8" other="main-column">
                        <h2>Portfolio</h2>
                        <Row className="portfoliorows">
                            {projects.map((project) => (

                                <Col size="md-6">
                                    <div className="card">
                                        <a href={project.link}>
                                            <img className="card-img" src={project.image} alt={project.title} />
                                        </a>
                                        <div className="card-img-overlay">
                                            <h3><a href={project.link}>{project.title}</a></h3>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col size="md-4">
                        {/* <!--contact card column--> */}
                        <Connect />
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Portfolio;