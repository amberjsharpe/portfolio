import React, { Component } from 'react';
import Bookworm from '../Projects/Bookworm';
import bookworm from '../images/book-logo.jpg';
import doLogo from '../images/doLogo.png';
import smalltalk from '../images/whitespeech.png';
import './Work.css';

class Work extends Component {

    render() {
        return(
            <div>
                <div className="project-container d-flex justify-content-around align-items-center w-100 mt-5">
                    <button className="project image-overlay-red"><h1 className="bookworm-font">Bookworm</h1></button>
                    <button className="project image-overlay-orange"><h1 className="do-font">do.</h1></button>
                    <button className="project image-overlay-blue"><h1 className="smalltalk-font">SmallTalk</h1></button>
                </div>
            </div>
        )
    }
}

export default Work