import React, { Component } from 'react';

export class Register extends Component {

  constructor() {

    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {

    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    console.log(newUser);
  }


  render() {
    return (
      <div className="register">

        <h1> Register </h1>
        
        <form onSubmit={this.onSubmit}> 
        <div>
          <input type="text" placeholder="Full Name" name="name" value={this.state.name} onChange={this.onChange} />
        </div>
        <div>
          <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} />
        </div>
        <div>
         <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
        </div>
        <div>
          <input type="password" placeholder="Repeat Password" name="password2" value={this.state.password2} onChange={this.onChange} />
        </div>
        <div>
         <input type="submit" /> 
        </div>
      
        </form>

      </div>
    )
  }
}

export default Register;
