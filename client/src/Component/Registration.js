import React, { Component } from 'react';

export class Registration extends Component {


  state = {
    message: '',
    redirect: false
  }

handleSubmit = (event) =>{
  console.log(event)
  const newUser ={
    
  }
}


  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <h2 className="center-align">Sign Up</h2>
            <p className="center-align"><strong>Sign up for a <a href="/register">Business</a> account here</strong></p>
            <div className="row">
              <div className="input-field col s6">
                <p style={{color: 'red'}}>{this.state.message}</p>
                <input id="first_name" type="text" className="validate"/>
                <label htmlFor="first_name">First Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate"/>
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <input id="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <input Placeholder="At least 5 characters" id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <input id="password-confirm" type="password" className="validate"/>
                <label htmlFor="password">Password Confirmation</label>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <p className="right-align">
                  <button className="btn btn-large waves-effect waves-light" type="submit" name="action">Sign Up</button>
                </p>
              </div>
            </div>
          </form>
        </div>        
      </div>
    );
  }
}

export default Registration;
