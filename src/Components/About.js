import React, { Component } from 'react';
import confetti from '../images/confetti-headshot.jpg';
import './About.css';

class About extends Component {
    render() {
        return(
            <div className="row pt-5">
                <div className="col-12 col-md-6">
                    <h1 className="pb-5 blue-underline">Here's a little about me!</h1>
                    <p><strong>
                    I'm a UI/UX Designer and Developer with a curious mind and a passion for create meaningful user experiences. 
                    </strong></p>
                    <p>
                    I've worked in several different fields, but the thing that always brings me the most fulfillment in my jobs is making things for people. Whether those things are lighting designs, marketing plans, websites, or lattes. I love waking up knowing that my day will be filled with problem-solving, learning, and interacting with people.
                    </p>
                    <p>
                    When I'm not staring at a computer screen, you will probably find me walking my adorable dog, Mason, experimenting with a new recipe in the kitchen, or trying to convince my husband to go to a yoga class with me.
                    </p>
                </div> 
                <div className="col-12 col-md-6">
                    <img className="confetti img-fluid" src={confetti} alt="confetti-headshot"/>
                </div>
            </div>
        )
    }
}

export default About