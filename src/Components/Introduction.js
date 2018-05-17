import React from 'react';
import './introduction.css';
import Project from './Project';

function Intro () {
    return (
        <div className="introduction">
            <div>
                <h3>Well, hey there!<br />I'm<span className="amber-sharpe">Amber Sharpe</span></h3>
            </div>
            <div className="sub-intro">
                <h4>I'm a Front End Developer &amp; UI/UX Designer.</h4>
                <h4>Explore some of my work below.</h4>
            </div>
            <Project />
        </div>
    )
}

export default Intro