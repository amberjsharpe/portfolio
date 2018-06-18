import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Social from './Components/Social';
import Work from './Components/Work';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
          <Social />
        </header>
        <Work />
      </div>
    );
  }
}

export default App;
