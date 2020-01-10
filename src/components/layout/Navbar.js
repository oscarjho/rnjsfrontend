import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <div className="navbar bg-light">
          <div className="container">
            <div>
              <a href="/"> 
                <h5 className="text-dark"> Mern Example</h5>
              </a>
            </div>
            <div> 
              <a href="/register"> 
                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal"> Sign In </button>
              </a>
            </div>

          </div>
        </div>


    )
  }
}
 
export default  Navbar;