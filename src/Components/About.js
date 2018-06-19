import React, { Component } from 'react';
import confetti from '../images/confetti-headshot.jpg';
import './About.css';

class About extends Component {
    render() {
        return(
            <div className="d-flex pt-5">
                <div className="w-50">
                    <img className="confetti"src={confetti} alt="confetti-headshot"/>
                </div>
                <div className="w-50">
                    <h1 className="pb-5">So you wanna know a little more?</h1>
                    <p>
                    Lorem ipsum dolor amet flexitarian vinyl chillwave slow-carb master cleanse. Freegan hoodie man bun leggings selvage tofu kickstarter squid retro. Chia 90's hella iceland cold-pressed, cliche slow-carb man braid distillery. Man bun wayfarers plaid hot chicken ugh cronut, live-edge succulents pug meggings 8-bit venmo chillwave meh. Literally fam poutine cornhole biodiesel. Fixie vape live-edge iPhone, meditation literally hot chicken ennui gochujang taiyaki organic chia drinking vinegar listicle tumblr. Subway tile truffaut glossier deep v whatever gluten-free vexillologist.
                    </p>
                    <p>
                    Godard literally +1 taiyaki viral lo-fi dreamcatcher. Prism hammock XOXO you probably haven't heard of them, brunch tousled quinoa polaroid kitsch butcher man braid semiotics af hashtag trust fund. Celiac freegan selvage PBR&B, pug bitters deep v viral williamsburg lomo vape unicorn tacos. Raclette gluten-free actually, wayfarers offal intelligentsia kale chips meh 8-bit. 3 wolf moon pitchfork leggings umami, bushwick selvage irony etsy cloud bread aesthetic squid adaptogen letterpress taxidermy.
                    </p>
                </div>
            </div>
        )
    }
}

export default About