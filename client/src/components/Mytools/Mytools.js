import React from "react";
import "./Mytools.css";

const Mytools = () => (
    <div className="card text-center">
        <div className="card-header">These Are My Tools</div>
        <div className="card-body justify-content-center">
            <img className="tools" src="./assets/images/tools/js.svg" alt="javascript" />
            <img className="tools" src="./assets/images/tools/nodejs.svg" alt="node" />
            <img className="tools" src="./assets/images/tools/react-logo.svg" alt="react" />
            <img className="tools" src="./assets/images/tools/mongodb.svg" alt="mongo" />
            <img className="tools" src="./assets/images/tools/MySQL.svg" alt="mysql" />
            <img className="tools" src="./assets/images/tools/express.png" alt="express" />
        </div>
    </div>
);

export default Mytools;
