import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Auth from '../auth';
import Nav from '../Component/Nav';
import MerchantComponent from '../Component/Merchant';
import Footer from '../Component/Footer';

class Login extends Component {

  handleSubmit = event => {
    event.preventDefault();
    fetch('/users/login', {
      method:'POST',
      headers:{ "Content-Type" : "application/json" },
      body: JSON.stringify({ email: event.target.email.value,  password: event.target.password.value })
    })
      .then(function(response) {
        return response.json();
      })
      .then( user_info => {
        localStorage.setItem("token", user_info.token);
        localStorage.setItem("user_id", user_info.user_id);
        Auth.login(() => {
          this.props.history.push('/deals'); 
          console.log('isAuthenticated from login  ->',Auth.isAuthenticated);
        } );
      });
  }
  render() {
    return (
        <div>
        <Nav/>
      <main className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input name="email" id="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input name="password" id="pass" type="password" className="validate"/>
                <label htmlFor="pass">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <p className="right-align">
                  <button className="btn btn-large waves-effect waves-light" type="submit" name="action">Login</button>
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer/>
      </div>
    );
  }
}

export default withRouter(Login); 

