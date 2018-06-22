import React from "react";

const Nav = () => (
  <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Antony Laroche</span>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" href="./index.html">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./contact.html">Contact</a>
            </li>
        </ul>
    </nav>
);

export default Nav;
