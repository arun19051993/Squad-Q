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

class Apps extends React.Component {
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
          <Route path="/digital" component={Dash} />
          <Route component={Dash}/>
        </Switch> 
      </div>
      </Router>
      </div>
    );
  }
}

class Dash extends React.Component  {
    constructor(props){
        super(props);
        this.state={ 
            digitalRedirect:false
        }
    }
    handleDigitalRedirect(){
      this.setState({
        digitalRedirect: true
      })
    }
    render() {
      if(this.state.digitalRedirect===true){
        return(
          <Redirect to='/digital'/>
        )
      }
      return (
        <div>
        <div className="tile" onClick={this.handleDigitalRedirect.bind(this)}>
          <div >
            <img className="digital-img" src={digital} />
          </div>
          <div className="digital-text">
          <Link to="/digital"> <p>Digital</p> Solutions</Link> 
          </div>
          <div>
            <img className="consult-img" src={consult} />
          </div>
          <div className="consult-text">
            <p>Consultancy</p> Services
          </div>
        </div>
        <div className="tile">
        <div className="mobile-text">
            <p>Mobile</p> Applications
         </div>
          <div >
          <img className="img-responsive mobile-img" src={mobile} />
          </div>
          <div className="column">
          <div>
          <img className="talent-img" src={talent} />
          </div>
          <div>
          <div className="talent-text">
            Talent Acquisition
         </div> 
          </div>
         </div>
         <div className="column">
         <div >
          <img className="ai-img" src={ai} />
          </div>
          <div className="ai-text">
            <p>Artificial</p> Intelligence
         </div>
        </div>
        </div>
        </div>
    );
}
}

class DigitalSol extends React.Component {
    render() {
      return (  
        <div>
        <div >
          <img className="digital-img" src={digital} />
        </div>
        <div className="digital-text">
        <Link to="/Digital"> <p>Digi</p> Solutions</Link> 
        </div>
        <div>
          <img className="consult-img" src={consult} />
        </div>
        <div className="consult-text">
          <p>Consultancy</p> Services
        </div>
      </div>
      )
    }
}
export default Apps;
