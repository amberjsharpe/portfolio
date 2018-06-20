import React, { Component } from 'react';
import confetti from '../images/confetti-headshot.jpg';
import './About.css';

class About extends Component {
    render() {
        return(
            <div className="row d-flex pt-5">
                <div className="col-12 col-md-6">
                    <img className="confetti img-fluid" src={confetti} alt="confetti-headshot"/>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="pb-5">Here's a little about me!</h1>
                    <p>
                    I'm a UI/UX Designer and Developer with a curious mind and a passion for create meaningful user experiences. I love waking up knowing that my day will be filled with problem-solving, learning, and interacting with people. 
                    </p>
                </div> 
            </div>
        )
    }
}

export default About