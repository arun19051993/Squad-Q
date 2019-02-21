import React, { Component } from 'react';
import logo from './images/q.PNG';
import digital from './images/digital.jpg'
import consult from './images/consulting.jpg'
import mobile from './images/mobile.png'
import talent from './images/talent.jpg'
import ai from './images/ai.jpg'
import DigitalSolution from './DigitalSolution.js'
import{BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";
import {Switch} from "react-router";
class Home extends Component {
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
          <Redirect to='/Digital'/>
        )
      }
      return (
        <div>
        <div className="tile" onClick={this.handleDigitalRedirect.bind(this)}>
          <div >
            <img className="digital-img" src={digital} />
          </div>
          <div className="digital-text">
          <Link to="/Digital"> <p>Digital</p> Solutions</Link> 
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
export default Home;