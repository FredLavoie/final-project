import React, { Component } from 'react';
import Nav from '../Component/Nav';
import LoginComponent from '../Component/Login';
import Footer from '../Component/Footer';

class Login extends Component {
  render() {
    console.log('Props Login: ', this.props);
    
    return (
      <div>
        <Nav/>
        <LoginComponent loginUser={this.props.loginUser} />
        <Footer/>
      </div>
    );
  }
}

export default Login;
