import React, { Component } from 'react';
import bookworm from '../images/bookworm.png';
import smalltalk from '../images/smalltalk.png';
import './Work.css';

class Work extends Component {

    render() {
        return(
            <div className="project-container d-flex justify-content-around align-items-center w-100 mt-5">
                <div className="project image-overlay-red"></div>
                <div className="project image-overlay-orange"></div> 
                <div className="project image-overlay-blue"></div>
            </div>
        )
    }
}

export default Work