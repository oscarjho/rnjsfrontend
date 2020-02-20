import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { logoutUser } from '../../actions/authActions';


class Navbar extends Component {

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {user.role} {user.name}
            <button 
              type="button" 
              className="btn btn-info"
              onClick={this.onLogoutClick.bind(this)}> 
                Logout
            </button> 
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/register"> 
            <button type="button" className="btn btn-info">Sign Up</button> 
          </Link> 
        </li>
        <li className="nav-item">
        &nbsp; 
        </li>
        <li className="nav-item">
          <Link to="/login"> 
          <button type="button" className="btn btn-info">Sign In</button> 
          </Link>
        </li>  
      </ul>
    );
    
    return (
        <div className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">

              <Link className="navbar-brand" to="/"> 
                <h5 className="text-dark col-8"> Mern Example</h5>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >
              <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mobile-nav">
                {isAuthenticated ? authLinks : guestLinks}
              </div>

          </div>
        </div>


    )
  }
}

Navbar.propTypes={
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});
 
export default  connect (mapStateToProps, { logoutUser })(Navbar);