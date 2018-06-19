import React, { Component } from 'react';
import Workbtns from '../Components/Workbtns';

class Do extends Component {
    render() {
        return(
            <div>
                <div className="bottom-border pb-5">
                    <Workbtns />
                </div>
                <div className="pt-3">
                    <h3 className="do-font do-orange-underline">do.</h3>
                </div>
                <p className="bottom-border pb-5">Bookworm is a project that I made during my time at Nashville Software School. We had two weeks to conduct user research, wireframe, prototype, and develop an application. This was the first application that I had ever built completely on my own from top to bottom. While I look back now and see all the things that I would do differently, Bookworm still has a very fond place in my heart.</p>
                <div className="d-flex pt-5 pb-5 bottom-border">
                    <div className="w-50 pt-5 pr-5 pl-5">
                        <h3 className="do-orange-underline">My inspiration</h3>
                        <p>I began my project by ambitiously deciding to re-design the entire parnassus website. I created a survey to try to get more information on "avid readers" and drew up my initial wireframes. It was during the wireframe process that I realized my time constraint was going to get the best of me. I was going to need to pivot ...</p>
                    </div>
                </div>
                <div className="d-flex pt-5 pb-5 bottom-border">
                    <div className="w-50">
                        <h3 className="do-orange-underline">Research</h3>
                        <p>I sent out a survey asking "avid readers" (those who read more than 20 books a year) to respond to a few questions. The responses that I received showed some clear themes about these "avid readers", so I decided to make an application based on what I discovered during this research. I followed up with several people to do more in-depth interviews about their reading habits and how they interacted with technology during that process.</p>
                    </div>    
                </div>
                    <div className="d-flex pt-5 pb-5 bottom-border">
                        <div className="pt-5">
                            <h3 className="do-orange-underline">Meet Abby!</h3>
                            <p>My research led me to develop me to develop this persona. In my design I tried to keep the design fun and colorful. I also based my interface design on interfaces that she already uses, like Pinterest and Instagram.</p>
                            <p>I learned that the way that my persona browses books is different from the way that she buys books. While she enjoys going to bookstores and browsing for leisure, the odds are she is going to actually buy books on Amazon. This led me to my challenge statement ...</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="pt-5 pb-5 bottom-border">
                            <h3 className="do-orange-underline pt-1 pb-1">Challenge Statement</h3>
                            <h4>How might I enable my persona to browse books in a relaxed setting without the pressure to purchase, while giving them the ability to track books that they’ve read or that they want to read?</h4>
                            <p>My solution for this challenge statement came in the form of an application primarily designed to search for books that you would like to read, or that allowed you to track books that you had already read. This met my persona's challenge of wanting to browse for books that she wanted to read without the pressure to buy (and also was achievable within the scope of my technical abilities).</p>
                        </div>
                    </div>
                    <div className="pt-5 pb-5 bottom-border">
                        <h3 className="pt-5 pb-5 do-orange-underline">Screen Sketches</h3>
                        <p>I started sketching out what I wanted the application to look like. I wanted a prominent search bar, since that is the main functionality of the site.</p>
                    </div>
                    <div className="bottom-border pb-5">
                        <h3 className="pt-5 pb-5 do-orange-underline">Bookworm v.1</h3>
                        <p>This was the final result that I presented from my midstone. I learned from my user interviews that when my persona shops for books she is primary interested in knowing the title, author, and pertinent details about the book. To keep the book cards from looking too cluttered, I programmed a modal to pop up with book details when you click on the book image.</p>
                    </div>
                    <div>
                        <div className="bottom-border pb-5">
                            <h3 className="pt-5 pb-5 do-orange-underline">Presentation Time!</h3>
                            <div className="d-flex">
                                <p className="pr-5 pl-5">If you can't tell, I had so much fun showing everyone what I had built. Along with a demonstration of my app, I was also able to share some of the lessons that I had learned along the way, and what I would build in version 2.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    <h3 className="pt-5 pb-5 do-orange-underline">Version 2</h3>
                    <p><strong>Now that I've learned React and whole lot more about designing and developing a website, I would approach version two of Bookworm very differently.</strong></p>
                    <ul>
                        <li>
                            <p>I did most of my testing on the final project, which was much harder to change than a prototype would have been. Now prototyping is a crucial part of my design process.</p>
                        </li>
                        <li>
                            <p>I wrote this application in Vanilla Javascript, before I learned a front end framework. The site is not very mobile friendly. In version two, I would re-write the application in React and use a mobile-first approach.</p>

                        </li>
                        <li>
                            <p>The biggest lesson that I learned was to not be afraid to pivot. Many times during the project I would be heading down one path, only to hear from my users that they wanted something different. I learned ot keep my process fluid enough that changes can be made along the way.</p>
                        </li>
                    </ul>

                    </div>
            </div>
        )
    }

}

export default Do