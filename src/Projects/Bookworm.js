import React, { Component } from 'react';
import Workbtns from '../Components/Workbtns';
import parnassus from '../images/parnassus.png';
import insights from '../images/bookworm-insights.png';
import persona from '../images/bookworm-persona.png';

class Bookworm extends Component {
    render() {
        return(
            <div>
                <div className="bottom-border pb-5">
                    <Workbtns />
                </div>
                <div className="bookworm-font pt-3">
                    <h3>Bookworm</h3>
                </div>
                <p>Bookworm is a project that I made during my time at Nashville Software School. I conducted user research, wireframed, prototyped, and developed this application after being inspired by another bookstore's site.</p>
                <div className="d-flex pt-5 pb-5 bottom-border">
                    <img className="parnassus-img w-50" src={parnassus} alt="parnassus" />
                    <div className="w-50 pt-5 pr-5 pl-5">
                        <h3>My inspiration</h3>
                        <p>I began my project by ambitiously deciding to re-design the entire parnassus website. I created a survey to try to get more information on "avid readers" and drew up my initial wireframes. It was during the wireframe process that I realized my time constraint was going to get the best of me. I was going to need to pivot ...</p>
                    </div>
                </div>
                <div className="d-flex pt-5 bottom-border">
                    <div className="w-50">
                        <h3>Research</h3>
                        <p>I sent out a survey asking "avid readers" (those who read more than 20 books a year) to respond to a few questions. The responses that I received showed some clear themes about these "avid readers", so I decided to make an application based on what I discovered during this research. I followed up with several people to do more in-depth interviews about their reading habits and how they interacted with technology during that process.</p>
                    </div>    
                    <img className="insights-img w-50" src={insights} alt="insights" />
                </div>
                    <div className="d-flex pt-5 pb-5 bottom-border">
                        <div>
                            <img className="persona-img" src={persona} alt="persona"/>
                        </div>
                        <div className="pt-5">
                            <h3>Meet Abby!</h3>
                            <p>My research led me to develop me to develop this persona. In my design I tried to keep the design fun and colorful. I also based my interface design on interfaces that she already uses, like Pinterest and Instagram.</p>
                            <p>I learned that the way that my persona browses books is different from the way that she buys books. While she enjoys going to bookstores and browsing for leisure, the odds are she is going to actually buy books on Amazon. This led me to my challenge statement ...</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="pt-5">
                            <h3>Challenge Statement</h3>
                            <h4>How might I enable my persona to browse books in a relaxed setting without the pressure to purchase, while giving them the ability to track books that they’ve read or that they want to read?</h4>
                        </div>
                    </div>  
            </div>
        )
    }

}

export default Bookworm