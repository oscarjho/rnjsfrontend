import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <div className="navbar">
          <div className="container">
            <div>
              <h5> Mern Example</h5>
            </div>
            <div>
              <button type="button" className="btn btn-info"> Sign In </button>
            </div>
          </div>
        </div>
    )
  }
}
 
export default  Navbar;