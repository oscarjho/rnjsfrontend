import React, { Component } from 'react';
import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
  fronterrors: {}
}

export class Register extends Component {

  constructor() {

    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      fronterrors: {},
      errors : {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  validate() {

    let fronterrors = {};
    
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!regex.test(this.state.password)) {
      fronterrors.password = 'Password need to have 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
    }

    if (this.state.name.length < 2) {
      fronterrors.name = 'Name must be between 2 and 40 characters'
    }

    if (this.state.name.length > 40) {
      fronterrors.name = 'Name must be between 2 and 40 characters'
    }

    if (this.state.password !== this.state.password2) {
      fronterrors.password2 ='Passwords must match'
    }

    if (!this.state.email.includes('@')){
      fronterrors.email = 'Invalid email'
    }

    if (Object.keys(fronterrors).length > 0) {
      this.setState({fronterrors});
      return false;
    }

    return true;
  }

  onSubmit(e) {

    e.preventDefault();

    const isValid = this.validate();
    //We check if valid returns true
    console.log(isValid);

    if (isValid) {
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      }
      console.log(newUser);

    axios
      .post('http://localhost:5000/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
      
     //clear form
      this.setState(initialState);
      
    }
    
  }


  render() {

    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center"> Register </h1>
              <p className="lead text-center">
                Create your account
              </p>

              <form onSubmit={this.onSubmit}> 

                  <input className="form-control" type="text" placeholder="Full Name" name="name" value={this.state.name} onChange={this.onChange} />

                  {this.state.fronterrors.name}
                  {errors.name}

                  <input className="form-control" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} />

                  {this.state.fronterrors.email}
                  {errors.email}

                  <input className="form-control" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />

                  {this.state.fronterrors.password}
                  {errors.password}

                  <input className="form-control" type="password" placeholder="Repeat Password" name="password2" value={this.state.password2} onChange={this.onChange} />

                  {this.state.fronterrors.password2}
                  {errors.password2}

                <input className="btn btn-info btn-block mt-4" type="submit" /> 
                
                </form>
                
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
