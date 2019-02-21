
import React from 'react';
import{BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";
import {Switch} from "react-router";
import logo from './images/q.PNG';
import digital from './images/digital.jpg'
import consult from './images/consulting.jpg'
import mobile from './images/mobile.png'
import talent from './images/talent.jpg'
import ai from './images/ai.jpg'
import './App.css';
import DigitalSolution from './DigitalSolution.js' 
import Home from './Home.js'
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
      <Router>
      <div>
        <nav className="navbar">
        <header className="App-header">
          <div className="column logo">
            <div className="pull-right title-font">
              SQUAD
            </div> 
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title-font">
              SOLUTIONS
            </div>
          </div>
          <div className="title-font pull-end">
            Where QUALITY is our core language
          </div>
          <div className="pull-end">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact US
            </a>
          </div>
        </header>
        </nav> 
        <Switch>
          <Route exact path="/digital" component={DigitalSolution} />
          <Route exact path="/"  component={Home}/>
          <Route component={Home}/>
        </Switch> 
      </div>
      </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
