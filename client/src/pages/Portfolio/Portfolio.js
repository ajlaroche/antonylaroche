import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './Portfolio.css';
import Connect from "../../components/Connect"

class Portfolio extends Component {
    render() {
        return (
            <Container >
                <Row id="toprow"></Row>
                {/* <!--this row adds space above entry area--> */}
                <Row>
                    {/* <!--main content column--> */}
                    <Col size="md-8" other="main-column">
                        <h2>Portfolio</h2>
                        <Row className="portfoliorows">
                            {/* <!--First row--> */}
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://ajlaroche.github.io/Hangman-Game/">
                                        <img className="card-img" src="./assets/images/hangingOn.jpeg" alt="Hangman" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>Hangman</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://ajlaroche.github.io/GOT-RolePlayingGame/">
                                        <img className="card-img" src="./assets/images/got_chair.jpg" alt="RPG Game" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>RPG Game</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="portfoliorows">
                            {/* <!--second row--> */}
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://ajlaroche.github.io/TriviaGame/">
                                        <img className="card-img" src="./assets/images/Bookworm.jpeg" alt="Trivia Game" /> </a>
                                    <div className="card-img-overlay">
                                        <h3>Trivia Game</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://pure-shelf-25877.herokuapp.com/">
                                        <img className="card-img" src="./assets/images/SeeItAll.jpeg" alt="Rutgers Info Widget" /> </a>
                                    <div className="card-img-overlay">
                                        <h3>Local Ink</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="portfoliorows">
                            {/* <!--third row--> */}
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://ajlaroche.github.io/RPS-Multiplayer/">
                                        <img className="card-img" src="./assets/images/DataDriven.jpeg" alt="Rock Paper Scissors" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>Rock Paper Scissors</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://ajlaroche.github.io/GifTheater/">
                                        <img className="card-img" src="./assets/images/cat_stage.jpg" alt="Gif Theather" /> </a>
                                    <div className="card-img-overlay">
                                        <h3>Gif Theater</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="portfoliorows">
                            {/* <!--Fourth row--> */}
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://github.com/ajlaroche/liri-node-app.git">
                                        <img className="card-img" src="./assets/images/monastery.jpg" alt="LIRI" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>LIRI  (CLI Application)</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://github.com/ajlaroche/wordGuess.git">
                                        <img className="card-img" src="./assets/images/wordguess.jpeg" alt="Word Guess" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>Word Guess (CLI Application)</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="portfoliorows">
                            {/* <!--Fifth row--> */}
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://github.com/ajlaroche/bamazon.git">
                                        <img className="card-img" src="./assets/images/shopping.jpeg" alt="bamazon" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>BAMAZON (CLI Application)</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://ajl-friendfinder.herokuapp.com/">
                                        <img className="card-img" src="./assets/images/twoFriends.jpg" alt="Word Guess" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>Friend Finder</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="portfoliorows">
                            {/* <!--Sixth row--> */}
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://ajl-sequelized-burger.herokuapp.com">
                                        <img className="card-img" src="./assets/images/hamburger.jpeg" alt="Burger Tracker" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>Burger Tracker</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://ajl-news-scraper.herokuapp.com/">
                                        <img className="card-img" src="./assets/images/handspaper.jpg" alt="News Scraper" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>Tech News Scraper</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="portfoliorows">
                            {/* <!--Seventh row--> */}
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://ajlaroche.github.io/clicky-game/">
                                        <img className="card-img" src="./assets/images/memory.png" alt="Clicky Game" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>Clicky Game</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col size="md-6">
                                <div className="card">
                                    <a href="https://ajl-nytreact.herokuapp.com/">
                                        <img className="card-img" src="./assets/images/nytimes.jpeg" alt="News York Times" />
                                    </a>
                                    <div className="card-img-overlay">
                                        <h3>NY Times Archives</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-4">
                        {/* <!--contact card column--> */}
                        <Connect/>
                    </Col>
                </Row>

            </Container >
        );
    }
}

export default Portfolio;