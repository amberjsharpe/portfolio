import React, { Component } from 'react';
import './Nav.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Introduction from './Introduction';
import Work from './Work';
import Play from './Play';
import About from './About';

class Nav extends Component {

    render(props) {
    return (
            <div>
                <nav className="d-flex justify-content-between">
                    <div>
                        <Link to='/'>
                            <div className="logo"><h1>a/#</h1></div>
                        </Link>
                    </div>
                    <div className="nav d-flex justify-content-between">
                        <h2><Link to='/'>HOME</Link></h2>
                        <h2><Link to='/work'>WORK</Link></h2>
                        <h2><Link to='/play'>PLAY</Link></h2>
                        <h2><Link to='/about'>ABOUT</Link></h2>
                    </div>
                </nav>
                <div>
                    <Switch>
                        <Route exact path="/" component={Introduction}/>
                        <Route path='/Work' component={Work} />
                        <Route path='/Play' component={Play} />
                        <Route path='/About' component={About} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Nav