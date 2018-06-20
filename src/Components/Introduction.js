import React from 'react';
import './Nav.css';
import Workbtns from '../Components/Workbtns';
import down from "../images/down.png";

function Intro () {
    return (
        <div className="introduction">
            <div className="head-intro">
                <h3>Well, hey there!<br />I'm<span className="amber-sharpe">Amber Sharpe</span></h3>
            </div>
            <div className="sub-intro">
                <h4>I'm a UI/UX Designer and Front-end Developer.</h4>
                <h4>Take a peek at some of my work.</h4>
            </div>
            <div className="d-flex justify-content-center pt-5">
                <img src={down} alt="down arrow" className="down-arrow"/>
            </div>
            <Workbtns />
        </div>
    )
}

export default Intro