import React, { Component } from 'react';
import './Nav.css';
import {
    Route,
    Link,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom';
import Introduction from './Introduction';
import Work from './Work';
// import Play from './Play';
import About from './About';
import Bookworm from '../Projects/Bookworm';
import Do from '../Projects/Do';
import Smalltalk from '../Projects/Smalltalk';

class Nav extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="row d-flex justify-content-between align-items-center">
                    <div className="col-12 col-md-6">
                        <Link to='/home'>
                            <div className="logo"><h1>a/#</h1></div>
                        </Link>
                    </div>
                    <div className="nav d-flex justify-content-around col-12 col-md-6">
                        <h2><NavLink activeClassName='is-active' to='/home'>HOME</NavLink></h2>
                        <h2><NavLink activeClassName='is-active' to='/work'>WORK</NavLink></h2>
                        {/* <h2><NavLink activeClassName='is-active' to='/play'>PLAY</NavLink></h2> */}
                        <h2><NavLink activeClassName='is-active' to='/about'>ABOUT</NavLink></h2>
                    </div>
                </nav>
                <div>
                    <Switch>
                        <Route exact path="/home" component={Introduction}/>
                        <Route exact path='/work' component={Work} />
                        <Route exact path="/work/bookworm" component={Bookworm}/>
                        <Route exact path="/work/do" component={Do}/>
                        <Route exact path="/work/smalltalk" component={Smalltalk}/>
                        {/* <Route exact path='/play' component={Play} /> */}
                        <Route exact path='/about' component={About} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Nav