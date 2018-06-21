import React, { Component } from 'react';
import Workbtns from '../Components/Workbtns';
import '../Components/Work.css';
import persona from '../images/smalltalk-persona1.png';
import goals from '../images/smalltalk-persona2.png';
import personality from '../images/smalltalk-persona3.png';
import prototype1 from '../images/st-prototype1.png';
import prototype2 from '../images/st-prototype2.png';
import prototype3 from '../images/st-prototype3.png';
import prototype4 from '../images/st-prototype4.png';
import prototype5 from '../images/st-prototype5.png';
import screen1 from '../images/st-appscreen1.png';
import screen2 from '../images/st-appscreen2.png';
import screen3 from '../images/st-appscreen3.png';


class Smalltalk extends Component {
    render() {
        return(
            <div>
                <div className="bottom-border pb-5">
                    <Workbtns />
                </div>
                <div className="pt-3">
                    <h3 className="smalltalk-font blue-underline">SmallTalk</h3>
                </div>
                <p className="bottom-border pb-5">SmallTalk is my final capstone project at Nashville Software School. It is an application that allows users to search for small talk topics by category and save them for later use. I designed this application to be used by people with social anxiety to prepare for big events in their life.</p>
                <div className="pt-5 pb-5 bottom-border">
                    <h3 className="blue-underline">Research</h3>
                    <div className="row">
                        <div className="col-12 col-md-6 pt-5">
                            <p>My initial idea was to create a fun app for parties to get the conversation rolling at parties. I sent out a survey to a group of my friends who are age 18-35, since I imagined this type of app might appeal to that age group. I also conducted in-person interviews, trying to gauge what someone would be looking for in this sort of app. Multiple people commented that they would rather use that app before they got to the party, so that they would be less nervous. This gave me the idea to create an app designed to help people alleviate their social anxiety by allowing them to plan out some small talk ideas beforehand.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-5 bottom-border">
                    <h3 className="blue-underline">Persona</h3>
                    <div className="row">
                        <div className="pt-5 col-12 col-md-6">
                            <img className="goals-img" src={goals} alt="goals" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div>
                                <img className="img-fluid screensketch-img" src={persona} alt="persona" />
                                <img className="screensketch-img" src={personality} alt="personality" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 bottom-border">
                    <h3 className="blue-underline">Challenge Statement</h3>
                    <div className="row">
                        <div className="col-12 pb-5">
                            <h4>How might I enable my users to reduce their anxiety at social events by supplying them with ideas for small talk?</h4>
                        </div>    
                    </div>
                </div>
                    <div className="row d-flex">
                        <div className="col-12 pt-5 pb-5 bottom-border">
                            <h3 className="blue-underline pt-1 pb-1">Prototype</h3>
                            <p>I built and tested </p>
                            <img className="img-fluid pl-2 pr-2 pb-3" src={prototype1} alt="prototype" />
                            <img className="img-fluid pl-2 pr-2 pb-3" src={prototype2} alt="prototype" />
                            <img className="img-fluid pl-2 pr-2 pb-3" src={prototype3} alt="prototype" />
                            <img className="img-fluid pl-2 pr-2 pb-3" src={prototype4} alt="prototype" />
                            <img className="img-fluid pl-2 pr-2 pb-3" src={prototype5} alt="prototype" />
                        </div>
                    </div>
                    <div className="pt-5 pb-5 bottom-border">
                        <h3 className="pt-5 pb-5 blue-underline">Changes Made</h3>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <p><strong>Brightened button colors</strong></p>
                                <img className="phone-img img-fluid" src={screen1} alt="screen" />
                            </div>
                            <div className="col-12 col-md-4">
                                <p><strong>Changed logo to back button</strong></p>
                                <img className="phone-img img-fluid" src={screen2} alt="screen" />
                            </div>
                            <div className="col-12 col-md-4">
                                <p><strong>Added space between heart and plus button</strong></p>
                                <img className="phone-img img-fluid" src={screen3} alt="screen" />
                            </div>
                        </div>
                    </div>
                    <div className="bottom-border pb-5">
                        <h3 className="pt-5 pb-5 blue-underline">Bookworm v.1</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p>This was the final result that I presented from my midstone. I learned from my user interviews that when my persona shops for books she is primary interested in knowing the title, author, and pertinent details about the book. To keep the book cards from looking too cluttered, I programmed a modal to pop up with book details when you click on the book image.</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="img-fluid" />
                            </div> 
                            <div className="col-12 col-md-6">
                                <img className="img-fluid" />
                            </div> 
                            <div className="col-12 col-md-6">
                                <img className="img-fluid pt-5"/>
                            </div> 
                        </div>  
                    </div>
                    <div className="row bottom-border pb-5">
                            <h3 className="col-12 pt-5 pb-5 blue-underline">Presentation Time!</h3>
                            <div className="col-12 col-md-6 d-flex">
                                <p className="pr-5 pl-5">If you can't tell, I had so much fun showing everyone Bookworm. Along with a demonstration of my app, I was also able to share some of the lessons that I had learned along the way, and what I would build in version 2.</p>
                            </div>
                            <div className="col-12 col-md-6 d-flex">
                                <img className="img-fluid" />
                            </div>
                        </div>
                    <div>
                    <h3 className="pt-5 pb-5 blue-underline">Version 2</h3>
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

export default Smalltalk