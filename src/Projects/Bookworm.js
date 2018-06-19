import React, { Component } from 'react';
import Workbtns from '../Components/Workbtns';
import parnassus from '../images/parnassus.png';
import insights from '../images/bookworm-insights.png';
import persona from '../images/bookworm-persona.png';
import screensketch1 from '../images/ScreenSketch1.jpg';
import screensketch2 from '../images/ScreenSketch2.jpg';
import screensketch3 from '../images/ScreenSketch3.jpg';
import bookwormscreen1 from '../images/bookworm1.png';
import bookwormscreen2 from '../images/bookworm2.png';
import bookwormscreen3 from '../images/bookworm3.png';


class Bookworm extends Component {
    render() {
        return(
            <div>
                <div className="bottom-border pb-5">
                    <Workbtns />
                </div>
                <div className="pt-3">
                    <h3 className="bookworm-font orange-underline">Bookworm</h3>
                </div>
                <p className="bottom-border pb-5">Bookworm is a project that I made during my time at Nashville Software School. We had two weeks to conduct user research, wireframe, prototype, and develop an application. This was the first application that I had ever built completely on my own from top to bottom. While I look back now and see all the things that I would do differently, Bookworm still has a very fond place in my heart.</p>
                <div className="d-flex pt-5 pb-5 bottom-border">
                    <div className="w-50 pt-5 pr-5 pl-5">
                        <h3 className="orange-underline">My inspiration</h3>
                        <p>I began my project by ambitiously deciding to re-design the entire parnassus website. I created a survey to try to get more information on "avid readers" and drew up my initial wireframes. It was during the wireframe process that I realized my time constraint was going to get the best of me. I was going to need to pivot ...</p>
                    </div>
                    <img className="parnassus-img w-50" src={parnassus} alt="parnassus" />
                </div>
                <div className="d-flex pt-5 bottom-border">
                    <div className="w-50">
                        <h3 className="orange-underline">Research</h3>
                        <p>I sent out a survey asking "avid readers" (those who read more than 20 books a year) to respond to a few questions. The responses that I received showed some clear themes about these "avid readers", so I decided to make an application based on what I discovered during this research. I followed up with several people to do more in-depth interviews about their reading habits and how they interacted with technology during that process.</p>
                    </div>    
                    <img className="insights-img w-50" src={insights} alt="insights" />
                </div>
                    <div className="d-flex pt-5 pb-5 bottom-border">
                        <div className="pt-5">
                            <h3 className="orange-underline">Meet Abby!</h3>
                            <p>My research led me to develop me to develop this persona. In my design I tried to keep the design fun and colorful. I also based my interface design on interfaces that she already uses, like Pinterest and Instagram.</p>
                            <p>I learned that the way that my persona browses books is different from the way that she buys books. While she enjoys going to bookstores and browsing for leisure, the odds are she is going to actually buy books on Amazon. This led me to my challenge statement ...</p>
                        </div>
                        <div>
                            <img className="persona-img" src={persona} alt="persona"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="pt-5 pb-5 bottom-border">
                            <h3 className="orange-underline">Challenge Statement</h3>
                            <h4>How might I enable my persona to browse books in a relaxed setting without the pressure to purchase, while giving them the ability to track books that they’ve read or that they want to read?</h4>
                        </div>
                    </div>
                    <div className="pt-5 pb-5 bottom-border">
                        <h3 className="pt-5 pb-5 orange-underline">Screen Sketches</h3>
                        <div className="d-flex justify-content-around">
                            <img className="screensketch-img" src={screensketch1} alt="screen sketch" />
                            <img className="screensketch-img" src={screensketch2} alt="screen sketch" />
                            <img className="screensketch-img" src={screensketch3} alt="screen sketch" />
                        </div>
                    </div>
                    <div>
                        <h3 className="pt-5 pb-5 orange-underline">Bookworm</h3>
                        <div className="d-flex justify-content-around">
                            <img className="screengrab-img" src={bookwormscreen2} alt="bookworm search results"/>
                            <img className="screengrab-img" src={bookwormscreen3} alt="bookworm read books page"/>
                        </div>
                        
                    </div>
            </div>
        )
    }

}

export default Bookworm