import React, { Component } from 'react';
import Nav from '../Component/Nav';
import LoginComponent from '../Component/Login';

class LoginPage extends Component {
  render() {    
    return (
      <div>
        <Nav/>
        <LoginComponent loginUser={this.props.loginUser} />
      </div>
    );
  }
}

export default LoginPage;
