import React, { Component } from 'react';
import Workbtns from '../Components/Workbtns';
import parnassus from '../images/parnassus.png';
import insights from '../images/bookworm-insights.png';
import persona from '../images/bookworm-persona.png';
import screensketch1 from '../images/ScreenSketch1.jpg';
import screensketch2 from '../images/ScreenSketch2.jpg';
import screensketch3 from '../images/ScreenSketch3.jpg';
import bookwormscreen2 from '../images/bookworm2.png';
import bookwormscreen3 from '../images/bookworm3.png';
import modal from '../images/bookworm-modal.png';
import present from '../images/bookworm-present.jpg';
import firebase from '../images/firebase.jpg';


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
                <p className="bottom-border pb-5">Bookworm is a project that I made during my time at Nashville Software School. We had two weeks to conduct user research, wireframe, prototype, and develop an application. You can see my code for this project <a href="https://github.com/amberjsharpe/book-worm" target="_blank">here.</a></p>
                <div className="pt-5 bottom-border">
                    <h3 className="orange-underline">Research</h3>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>I sent out a survey asking "avid readers" (those who read more than 20 books a year) to respond to a few questions. I followed up with several people to do more in-depth interviews about their reading habits and how they interacted with technology during that process.</p>
                        </div>    
                        <div className="col-12 col-md-6">
                            <img className="insights-img img-fluid" src={insights} alt="insights" />
                        </div>
                    </div>
                </div>
                    <div className="pt-5 pb-5 bottom-border">
                        <h3 className="orange-underline">Persona</h3>
                        <div className="row">
                            <div className="pt-5 col-12 col-md-6">
                                <p>I learned that the way that my persona browses books is different from the way that she buys books. While she enjoys going to bookstores and browsing for leisure, the odds are she is going to actually buy books on Amazon.</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="img-fluid persona-img" src={persona} alt="persona"/>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-12 pt-5 pb-5 bottom-border">
                            <h3 className="orange-underline pt-1 pb-1">Challenge Statement</h3>
                            <h4>How might I enable my persona to browse books in a relaxed setting without the pressure to purchase, while giving them the ability to track books that they’ve read or that they want to read?</h4>
                        </div>
                    </div>
                    <div className="pt-5 pb-5 bottom-border">
                        <h3 className="pt-5 pb-5 orange-underline">Screen Sketches</h3>
                        <div className="d-flex justify-content-around">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <img className="screensketch-img img-fluid" src={screensketch1} alt="screen sketch" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <img className="screensketch-img img-fluid" src={screensketch2} alt="screen sketch" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <img className="screensketch-img img-fluid" src={screensketch3} alt="screen sketch" />
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className="pt-5 pb-5 bottom-border">
                        <h3 className="pt-5 pb-5 orange-underline">Firebase Data Structure</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img className="firebase-img img-fluid" src={firebase} alt="firebase data structure"/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-border pb-5">
                        <h3 className="pt-5 pb-5 orange-underline">Bookworm v.1</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p>This was the final result that I presented from my midstone. I learned from my user interviews that when my persona shops for books she is primary interested in knowing the title, author, and pertinent details about the book. To keep the book cards from looking too cluttered, I programmed a modal to pop up with book details when you click on the book image.</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="screengrab-img img-fluid" src={bookwormscreen2} alt="bookworm search results"/>
                            </div> 
                            <div className="col-12 col-md-6">
                                <img className="screengrab-img img-fluid" src={bookwormscreen3} alt="bookworm read books page"/>
                            </div> 
                            <div className="col-12 col-md-6">
                                <img className="screengrab-img img-fluid pt-5" src={modal} alt="bookworm read books page"/>
                            </div> 
                        </div>  
                    </div>
                    <div className="row bottom-border pb-5">
                            <h3 className="col-12 pt-5 pb-5 orange-underline">Presentation Time!</h3>
                            <div className="col-12 col-md-6 d-flex">
                                <p className="pr-5 pl-5">I had so much fun showing everyone Bookworm. Along with a demonstration of my app, I was also able to share some of the lessons that I had learned along the way, and what I would build in version 2.</p>
                            </div>
                            <div className="col-12 col-md-6 d-flex">
                                <img src={present} className="img-fluid" alt="me presenting my project" />
                            </div>
                        </div>
                    <div>
                    <h3 className="pt-5 pb-5 orange-underline">Version 2</h3>
                    <p><strong>Now that I've learned React and whole lot more about designing and developing a website, I would approach version two of Bookworm very differently.</strong></p>
                    <ul>
                        <li>
                            <p>I did most of my testing on the final project, which was much harder to change than a prototype would have been. Now prototyping is a crucial part of my design process.</p>
                        </li>
                        <li>
                            <p>I wrote this application in Vanilla Javascript, before I learned a front end framework. The site is not very mobile friendly. In version two, I would re-write the application in React and use a mobile-first approach.</p>

                        </li>
                        <li>
                            <p>The biggest lesson that I learned was to not be afraid to pivot. Many times during the project I would be heading down one path, only to hear from my users that they wanted something different. I learned to keep my process fluid enough that changes can be made along the way.</p>
                        </li>
                    </ul>

                    </div>
            </div>
        )
    }

}

export default Bookworm