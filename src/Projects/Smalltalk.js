import React, { Component } from 'react';
import Workbtns from '../Components/Workbtns';
import '../Components/Work.css';
import persona from '../images/smalltalk-persona1.png';
import goals from '../images/smalltalk-persona2.png';
import personality from '../images/smalltalk-persona3.png';

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
                            <p>My initial idea was to create a fun application to get the conversation rolling at parties. I sent out a survey to a group of my friends who are age 18-35, since I imagined this type of application might appeal to that age group. I also conducted in-person interviews, trying to gauge what someone would be looking for in this sort of app. Multiple people commented that they would rather use that app before they got to the party, so that they would be less nervous. This gave me the idea to create an app designed to help people alleviate their social anxiety by allowing them to plan out some small talk ideas beforehand.</p>
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
                            <img className="persona-img" src={goals} alt="goals" />
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
                    <h3 className="blue-underline">fill</h3>
                    <div className="row">
                        <div className="col-12 pb-5">
                            <p>I sent out a survey asking "avid readers" (those who read more than 20 books a year) to respond to a few questions. The responses that I received showed some clear themes about these "avid readers", so I decided to make an application based on what I discovered during this research. I followed up with several people to do more in-depth interviews about their reading habits and how they interacted with technology during that process.</p>
                        </div>    
                    </div>
                </div>
                    <div className="row d-flex">
                        <div className="col-12 pt-5 pb-5 bottom-border">
                            <h3 className="blue-underline pt-1 pb-1">Challenge Statement</h3>
                            <h4>How might I enable my persona to browse books in a relaxed setting without the pressure to purchase, while giving them the ability to track books that they’ve read or that they want to read?</h4>
                            <p>My solution for this challenge statement came in the form of an application primarily designed to search for books that you would like to read, or that allowed you to track books that you had already read. This met my persona's challenge of wanting to browse for books that she wanted to read without the pressure to buy (and also was achievable within the scope of my technical abilities).</p>
                        </div>
                    </div>
                    <div className="pt-5 pb-5 bottom-border">
                        <h3 className="pt-5 pb-5 blue-underline">Screen Sketches</h3>
                        <p>I started sketching out what I wanted the application to look like. I wanted a prominent search bar, since that is the main functionality of the site.</p>
                        <div className="d-flex justify-content-around">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <img className="img-fluid" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <img className="img-fluid" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <img className="img-fluid" />
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className="pt-5 pb-5 bottom-border">
                        <h3 className="pt-5 pb-5 blue-underline">Firebase Data Structure</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p className="pr-5 pl-5">If you fail to plan, then you plan to fail!</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="img-fluid" />
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