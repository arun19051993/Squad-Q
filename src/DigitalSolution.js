import React, { Component } from 'react';
import logo from './images/q.PNG';
import digital from './images/digital.jpg'
import consult from './images/consulting.jpg'
import mobile from './images/mobile.png'
import talent from './images/talent.jpg'
import ai from './images/ai.jpg'
import{BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";
import {Switch} from "react-router";

class DigitalSolution extends Component {
    render() {
      return (
        <div className="digidummy">
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

export default DigitalSolution;