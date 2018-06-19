import React, { Component } from 'react';
import './Nav.css';
import {
    Route,
    Link
} from 'react-router-dom';
import Introduction from './Introduction';
import Work from './Work';
import Play from './Play';
import About from './About';
import Bookworm from '../Projects/Bookworm';
import Do from '../Projects/Do';
import Smalltalk from '../Projects/Smalltalk';

class Nav extends Component {

    render() {

    return (
            <div>
                <nav className="d-flex justify-content-between">
                    <div>
                        <Link to='/home'>
                            <div className="logo"><h1>a/#</h1></div>
                        </Link>
                    </div>
                    <div className="nav d-flex justify-content-between">
                        <h2><Link to='/home'>HOME</Link></h2>
                        <h2><Link to='/work'>WORK</Link></h2>
                        <h2><Link to='/play'>PLAY</Link></h2>
                        <h2><Link to='/about'>ABOUT</Link></h2>
                    </div>
                </nav>
                <div>
                    <Route exact path="/home" component={Introduction}/>
                    <Route exact path='/work' component={Work} />
                    <Route exact path="/work/bookworm" component={Bookworm}/>
                    <Route exact path="/work/do" component={Do}/>
                    <Route exact path="/work/smalltalk" component={Smalltalk}/>
                    <Route exact path='/play' component={Play} />
                    <Route exact path='/about' component={About} />
                </div>
            </div>
        );
    }
}

export default Nav