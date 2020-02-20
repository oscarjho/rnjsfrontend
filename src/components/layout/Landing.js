import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
        <div className="landing center-h center-v">
          <Link to="/register"> 
            <button type="button" className="btn-lg btn-info" >Register</button> 
          </Link> 
        </div>
    )
  }
}

export default Landing;