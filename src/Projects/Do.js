import React, { Component } from 'react';
import Workbtns from '../Components/Workbtns';
import winner from '../images/do-winnershot.png';
import team from '../images/do-team.png';
import api from '../images/API.png';
import user from '../images/do-user.png';
import competitor from '../images/do-competitor.png';

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
                <p className="bottom-border pb-5">For this project, our instructor came up with the idea for us to design, build, and pitch an application using data from Nashville's Open Data. And thus, Nashville Software School's first "Perfect Pitch Competition" was born. To read more about the competition and the other wonderful apps that my classmates build, click <a href="http://learn.nashvillesoftwareschool.com/blog/2018/05/29/metro-nashville-open-data-application-pitches?utm_medium=social&utm_source=linkedin" target="_blank">here</a>. This was one of my favorite projects that I worked on at NSS. It was so amazing to get feedback from the tech community about what we had built.</p>
                <div className="d-flex pt-5 pb-5 bottom-border">
                    <div>
                        <h3 className="pb-3 do-orange-underline">Our Team</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img className="screengrab-img img-fluid" src={team} alt="team members and their roles" />
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="pl-5 pr-5">I was involved in <strong>Project Management, UX Design and Reseach, and Development.</strong> I assisted Lindsay in creating and assigning tickets, tracking progress, and merging pull requests on Github. I was also a part of the team that initial design and tested the prototype, as well as doing a little development.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex pt-5 pb-5 bottom-border">
                    <div>
                        <h3 className="pb-3 do-orange-underline">Our Concept</h3>
                        <div className="row d-flex">
                            <div className="col-12 col-md-6">
                                <img className="screengrab-img img-fluid" src={api} alt="api" />
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="pl-5 pr-5"><strong>Day Out, or do., is a Tinder style app</strong> that allows users to "match" with new points of interest in the Nashville area. Using data from data.nashville.gov, do. pulls from Nashville's Public Art, Historical Markers, and Parks data.</p>
                            </div>
                        </div>
                    </div>    
                </div>
                    <div className="d-flex pt-5 pb-5 bottom-border">
                        <div>
                            <h3 className="pb-3 do-orange-underline">Our User</h3>
                            <div className="row d-flex">
                                <div className="col-12 col-md-6">
                                    <img className="screengrab-img img-fluid" src={user} alt="user" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="pl-5 pr-5">We call our user the "Impoverished Influencer." <strong>Think millennial, think hipster, think school debt.</strong> Bryan, is the kind of guy that wants to be on top of the game when it comes to the next cool thing to do. He’s is looking to find interesting new ways to break his routine - and if they’re free, all the better. He’s already an outdoor exerciser, he takes his dog to the dog park, our goal is to expand on his behaviour and let him know what else there is to do. in his area.</p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="d-flex pt-5 pb-5 bottom-border">
                        <div>
                            <h3 className="pb-3 do-orange-underline">Competitor Research</h3>
                            <div className="row d-flex">
                                <div className="col-12 col-md-6">
                                    <img className="screengrab-img img-fluid" src={competitor} alt="competitor research" />
                                </div>   
                                <div className="col-12 col-md-6">
                                    <p className="pl-5 pr-5">help help help help help help help help help help help help help help help help help help </p>
                                </div>                                 
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="pt-5 pb-5 bottom-border">
                            <h3 className="do-orange-underline pt-1 pb-1">Challenge Statement</h3>
                            <h4>How might we make finding new public spaces fast, fun, simple, and relatable?</h4>
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
                                <p>If you can't tell, I had so much fun showing everyone what I had built. Along with a demonstration of my app, I was also able to share some of the lessons that I had learned along the way, and what I would build in version 2.</p>
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