import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
state = {
  toDashboard: false,
  merchant_id: null
}
handleSubmit = event => {
  event.preventDefault();
    fetch('/merchants/login', {
      method:'POST',
      headers:{ "Content-Type" : "application/json" },
      body: JSON.stringify({ email: event.target.email.value,  password: event.target.password.value })
   })
    .then(function(response) {
      return response.json();
    })
    .then( merchant_info => {
      // this.setState({merchant_id: merchant_info.merchant_id});
      localStorage.setItem("token", merchant_info.token);
      this.setState({ toDashboard: true, merchant_id: merchant_info.merchant_id });
      this.props.loginUser(merchant_info.merchant_id);
      });
}
    render() {
      if (this.state.toDashboard === true) {
        let path = `/merchants/${this.state.merchant_id}/dashboard`;
        return <Redirect to={path}/>
      }
        return (
          <main className="container">
            <div className="row">
              <div className="col m6">
                <h2 className="center-align">Login</h2>
                <p className="center-align"><strong><a href="/signup">Sign Up here</a></strong></p>
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
              </div>
            </div>
          </main>
        )
    }
}

export default Login

