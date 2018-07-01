import React, { Component } from 'react';
// import { Row, Container } from "../../components/Grid";
import './Home.css';
// import Connect from "../../components/Connect"

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="introPic">
                    <img src="./assets/images/formal-me.jpg" alt="selfie" className="rounded-circle image-fluid" />
                </div>
                <div className="introMobil row">
                    <h1>My name is Antony Laroche</h1>
                    <p>I'm a developer</p>
                </div>
                <div className="intro row">
                    <h1 className="typewriter1">My name is Antony Laroche</h1>
                </div>

                <div className="subintro row">
                    <h1 className="typewriter2">I'm a developer</h1>
                </div>
                <div className="buttonLinks justify-content-center container-fluid">
                    <a className="btn btn-primary" href="/About" role="button">About Me</a>
                    <a className="btn btn-primary" href="/Portfolio" role="button">My Portfolio</a>
                    <a className="btn btn-primary" href="/Contact" role="button">Contact Me</a>
                </div>
            </div>
        );
    }
}

export default Home;
