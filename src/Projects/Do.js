import React, { Component } from 'react';
import Workbtns from '../Components/Workbtns';
import winner from '../images/do-winnershot.png';
import team from '../images/do-team.png';
import api from '../images/API.png';
import user from '../images/do-user.png';
import competitor from '../images/do-competitor.png';
import prototypes from '../images/do-prototype.png';
import usability from '../images/do-usability.png';
import style from '../images/do-styleguide.png';

class Do extends Component {
    render() {
        return (
            <div>
                <div className="bottom-border pb-5">
                    <Workbtns />
                </div>
                <div className="pt-3">
                    <h3 className="do-font do-orange-underline">do.</h3>
                </div>
                <p className="bottom-border pb-5">For this project, our instructor came up with the idea for us to design, build, and pitch an application using data from Nashville's Open Data. And thus, Nashville Software School's first "Perfect Pitch Competition" was born. To read more about the competition and the other wonderful apps that my classmates build, click <a href="http://learn.nashvillesoftwareschool.com/blog/2018/05/29/metro-nashville-open-data-application-pitches?utm_medium=social&utm_source=linkedin" target="_blank">here</a>. We were so fortunate to get feedback on our applications from members of the Nashville tech community. Click <a href="https://github.com/amberjsharpe/do" target="_blank">here</a> to see code for this project.</p>
                <div className="d-flex pt-5 pb-5 bottom-border">
                    <div>
                        <h3 className="pb-3 do-orange-underline">Our Team</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img className="screengrab-img img-fluid" src={team} alt="team members and their roles" />
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="pl-5 pr-5">I was involved in <strong>Project Management, UX Design and Reseach, and Development.</strong> I assisted in creating and assigning tickets, tracking progress, and merging pull requests on Github. I was also a part of the team that came up with the initial concept and design, as well as one of the developers.</p>
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
                                <p className="pl-5 pr-5"><strong>Day Out, or do., is a Tinder style app</strong> that allows users to "match" with points of interest in the Nashville area. Using data from data.nashville.gov, do. pulls from Nashville's Public Art, Historical Markers, and Parks data.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex pt-5 pb-5 bottom-border">
                    <div>
                        <h3 className="pb-3 do-orange-underline">Our User</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img className="screengrab-img img-fluid" src={user} alt="user" />
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="pl-5 pr-5">Our user is called the "Impoverished Influencer." <strong>Think millennial, think hipster, think school debt.</strong> Bryan, is the kind of guy that wants to be on top of the game when it comes to the next cool thing to do. He’s is looking to find interesting new ways to break his routine - and if they’re free, all the better. He’s already an outdoor exerciser, he takes his dog to the dog park, our goal is to expand on his behaviour and let him know what else there is to do. in his area.</p>
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
                                <p className="pl-5 pr-5">During our user research, several other Nashville websites were mentioned. The feedback we received is that they were cluttered and advertisement heavy, but all that was available. We did our own digging and generally concurred with our interviewees. Most of these sites had so much information that it was difficult to quickly plan out an activity for the day. This led us to our Challenge Statement...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-5 bottom-border">
                    <div>
                        <h3 className="do-orange-underline pt-1 pb-1">Challenge Statement</h3>
                        <h4>How might we make finding new public spaces fast, fun, simple, and relatable?</h4>
                    </div>
                </div>
                <div className="pt-5 pb-5 bottom-border">
                    <h3 className="pt-5 pb-5 do-orange-underline">Prototypes</h3>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>Our original prototype was a scroll based version of the final app with differentiation between Art, Parks, and Historical Data. Upon user testing, we realized the desired outcome for the user was to quickly find things near them when they were already out, or when they were ready to go out. We found out the user wanted something quick, relatable, and fun when dealing with this data. From this place we pivoted to the Tinder style which more captivated users.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="screengrab-img img-fluid" src={prototypes} alt="prototypes" />
                        </div>
                    </div>
                </div>
                <div className="bottom-border pb-5">
                    <h3 className="pt-5 pb-5 do-orange-underline">Usability Testing</h3>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>We also added a few things to our final application, based off feedback that we received during our user testing. People wanted the ability to comment on points of interest, so we added that as a feature. Since we were pulling from three different APIs, we also added a description under the Point of Interest name to let people know whether it was a park, historical marker, or art site. There were a few icons that people kept trying to click that were just for decoration, so we just took those out!</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="screengrab-img img-fluid" src={usability} alt="usability" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bottom-border pb-5">
                        <h3 className="pt-5 pb-5 do-orange-underline">Style Guide</h3>
                        <img className="screengrab-img img-fluid" src={style} alt="style guide" />
                    </div>
                </div>
                <div>
                    <h3 className="pt-5 pb-5 do-orange-underline">Spoiler alert: We won!</h3>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img className="screengrab-img img-fluid" src={winner} alt="winner" />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>It was extremely close, but we managed to squeeze by with a victory! We learned so much during this project. Firstly, we learned how important it is to <strong>set state at the top of your application when building a React app.</strong> We learned the balance of creating new itterations of our application based user feedback, while also making sure that we were on track to meet our development deadline.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Do