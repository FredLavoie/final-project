import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Auth from '../auth';

class Login extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/merchants/login', {
      method:'POST',
      headers:{ "Content-Type" : "application/json" },
      body: JSON.stringify({ email: event.target.email.value,  password: event.target.password.value })
    })
      .then(function(response) {
        return response.json();
      })
      .then( merchant_info => {
        localStorage.setItem("token", merchant_info.token);
        localStorage.setItem("merchant_id", merchant_info.merchant_id);
        localStorage.setItem("business_name", merchant_info.business_name);
        Auth.login(() => {
          this.props.history.push('/merchants/dashboard');
        } );
      });
  }
  render() {
    return (
      <main className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
          <h2 className="center-align">Merchant login</h2>
          <p className="center-align"><strong>Login as a <a href="/users/login">User</a></strong></p>          
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
    );
  }
}

export default withRouter(Login); 

