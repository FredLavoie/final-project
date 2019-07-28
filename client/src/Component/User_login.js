import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Auth from '../auth';

class UserLogin extends Component {
  state = {
    message: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const loginUser = async () =>{
        const request =  await fetch('/api/users/login', {
          method:'POST',
          headers:{ "Content-Type" : "application/json" },
          body: JSON.stringify({ email: event.target.email.value,  password: event.target.password.value })
        })
        if(request.ok){
            let response = await request.json();
            if(response.good){
                  localStorage.setItem("token", response.token);
                  localStorage.setItem("user_id", response.user_id);
                  localStorage.setItem("username", response.username);
                  Auth.login(() => {
                    this.props.history.push('/deals'); 
                  });
        }
       
    }
    if(request.status === 400){
      let response = await request.json();
      this.setState({message: response.message})
  }
  }
  loginUser();
}

  render() {
    return (
    <div>
      <main className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
          <h6 style={{color: "green"}}>{this.props.message}</h6>
          <h2 className="center-align">User login</h2>
          <p className="center-align"><strong>Login as a <a href="/login">Merchant</a></strong></p>          
            <div className="row">
            <h6 style={{color: "red"}}>{this.state.message}</h6>
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
    </div>
    );
  }
}

export default withRouter(UserLogin); 

