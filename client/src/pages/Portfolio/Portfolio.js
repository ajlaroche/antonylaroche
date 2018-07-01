import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './Portfolio.css';
import Connect from "../../components/Connect"
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

class Portfolio extends Component {


    render() {

        const projects = [
            { link: "https://ajlaroche.github.io/Hangman-Game/", image: "./assets/images/hangingOn.jpeg", title: "Hangman", repo: "https://github.com/ajlaroche/Hangman-Game.git" },
            { link: "https://ajlaroche.github.io/GOT-RolePlayingGame/", image: "./assets/images/got_chair.jpg", title: "RPG Game", repo: "https://github.com/ajlaroche/GOT-RolePlayingGame.git" },
            { link: "https://ajlaroche.github.io/TriviaGame/", image: "./assets/images/Bookworm.jpeg", title: "Trivia Game", repo: "https://github.com/ajlaroche/TriviaGame.git" },
            { link: "https://pure-shelf-25877.herokuapp.com/", image: "./assets/images/SeeItAll.jpeg", title: "Local Ink", repo: "https://github.com/ajlaroche/Local-Ink.git" },
            { link: "https://ajlaroche.github.io/RPS-Multiplayer/", image: "./assets/images/DataDriven.jpeg", title: "Rock Paper Scissors", repo: "https://github.com/ajlaroche/RPS-Multiplayer.git" },
            { link: "https://ajlaroche.github.io/GifTheater/", image: "./assets/images/cat_closeup.jpeg", title: "Gif Theather", repo: "https://github.com/ajlaroche/GifTheater.git" },
            { link: "https://ajl-friendfinder.herokuapp.com/", image: "./assets/images/twoFriends.jpg", title: "Friend Finder", repo: "https://github.com/ajlaroche/FriendFinder.git" },
            { link: "https://ajl-news-scraper.herokuapp.com/", image: "./assets/images/handspaper.jpg", title: "News Scraper", repo: "https://github.com/ajlaroche/news-scraper.git" },
            { link: "https://ajlaroche.github.io/clicky-game/", image: "./assets/images/card_shuffle.jpg", title: "Clicky Game", repo: "https://github.com/ajlaroche/clicky-game.git" },
            { link: "https://ajl-nytreact.herokuapp.com/", image: "./assets/images/nytimes.jpeg", title: "NY Times Archives", repo: "https://github.com/ajlaroche/nytreact.git" }
        ]

        return (
            <div>
                <Nav />
                <Container >
                    <Row id="toprow"></Row>
                    {/* <!--this row adds space above entry area--> */}
                    <Row>
                        {/* <!--main content column--> */}
                        <Col size="md-8" other="main-column">
                            <h2>Portfolio</h2>
                            <Row className="portfoliorows">
                                {projects.map((project, index) => (

                                    <Col size="md-6">
                                        <div className="card projects shadow">
                                            <a href={project.link}>
                                                <img className="card-img-top" src={project.image} alt={project.title} />
                                            </a>
                                            <div className="card-text">
                                                <h3><a href={project.link}>{project.title}</a><a href={project.repo}><i class="fab fa-github"></i></a></h3>
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
                <Footer />
            </div>
        );
    }
}

export default Portfolio;