import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Work.css';

class Workbtns extends Component {

    render() {
        return(
            <div>
                <div className="project-container d-flex justify-content-around align-items-center w-100 mt-5">
                    <Link to="/work/bookworm">
                        <button className="project image-overlay-red">
                                <h1 className="bookworm-font">Bookworm</h1>
                        </button>
                    </Link>
                    <Link to="/work/do">
                        <button className="project image-overlay-orange">
                                <h1 className="do-font">do.</h1>
                        </button>
                    </Link>
                    <Link to="/work/smalltalk">
                        <button className="project image-overlay-blue">
                                <h1 className="smalltalk-font">SmallTalk</h1>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Workbtns