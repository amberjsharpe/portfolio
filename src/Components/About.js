import React, { Component } from 'react';
import confetti from '../images/confetti-headshot.jpg'
import './about.css';

class About extends Component {
    render() {
        return(
            <div>
                <div className="container d-flex">
                    <div className="w-50">
                        <h2 className="scooch">A scooch about me...</h2>
                        <img src={confetti} className="confetti"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About