import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-light">
      <a href="/"> <span className="navbar-brand mb-0 h1">Antony Laroche</span></a>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
);

export default Nav;
