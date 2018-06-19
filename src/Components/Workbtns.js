import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Work.css';

class Workbtns extends Component {

    render() {
        return(
            <div>
                <div className="row project-container d-flex text-center mt-5">
                    <Link className="col-12 col-md-4" to="/work/bookworm">
                        <button className="project image-overlay-red">
                                <h1 className="bookworm-font">Bookworm</h1>
                        </button>
                    </Link>
                    <Link className="col-12 col-md-4" to="/work/do">
                        <button className="project image-overlay-orange">
                                <h1 className="do-font">do.</h1>
                        </button>
                    </Link>
                    <Link className="col-12 col-md-4" to="/work/smalltalk">
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