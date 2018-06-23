import React from "react";
import "./Connect.css";

const Connect = () => (
    <div className="card text-center">
        <div className="card-header">Connect with Me</div>
        <div className="card-body justify-content-center">
            <a href="https://github.com/ajlaroche" target="_blank" rel="noopener noreferrer"><img className="sociallinks" src="./assets/images/GitHubIcon.png" alt="GitHub" /></a>
            <a href="https://linkedin.com/in/antony-laroche-782248121" target="_blank" rel="noopener noreferrer"><img className="sociallinks" src="./assets/images/linkedInIcon.png" alt="LinkedIn" /></a>
            <a href="https://stackoverflow.com/users/8926024/ajtherock" target="_blank" rel="noopener noreferrer"><img className="sociallinks" src="./assets/images/StackOverflowIcon.png" alt="Stacked Overflow" /></a>
        </div>
    </div>
);

export default Connect;
