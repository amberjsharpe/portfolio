import React, { Component } from 'react';
import './Nav.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Introduction from './Introduction';
import Work from './Work';
import About from './About';

class Nav extends Component {

    render(props) {
    return (
            <Router>
                <div>
                    <nav className="d-flex justify-content-between">
                        <div>
                            <Link to='/'>
                                <div className="logo"><h1>a/#</h1></div>
                            </Link>
                        </div>
                        <div className="nav-bar d-flex justify-content-between w-25">
                            <div className="nav-item"><h2><Link to='/'>HOME</Link></h2></div>
                            <div className="nav-item"><h2><Link to='/work'>WORK</Link></h2></div>
                            <div className="nav-item"><h2><Link to='/about'>ABOUT</Link></h2></div>
                        </div>
                    </nav>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Introduction}/>
                            <Route path='/Work' component={Work} />
                            <Route path='/About' component={About} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Nav