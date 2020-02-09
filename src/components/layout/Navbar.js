import React, { Component } from 'react';

class Navbar extends Component {
  render() {

    const guestLinks = (

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/register"> 
            <button type="button" className="btn btn-info">Sign Up</button> 
          </a> 
        </li>
        <li className="nav-item">
        &nbsp; 
        </li>
        <li className="nav-item">
          <a href="/login"> 
          <button type="button" className="btn btn-info">Sign In</button> 
          </a>
        </li>  
        </ul>
    );
    
    return (
        <div className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">

              <a className="navbar-brand" href="/"> 
                <h5 className="text-dark col-8"> Mern Example</h5>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >
              <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mobile-nav">
                {guestLinks}
              </div>

          </div>
        </div>


    )
  }
}
 
export default  Navbar;