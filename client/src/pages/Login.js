import React, { Component } from 'react'
import Nav from '../Component/Nav';
import LoginComponent from '../Component/Login';
import Footer from '../Component/Footer';

class Login extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <LoginComponent userAuth={this.props.userAuth}/>
        <Footer/>
      </div>
    )
  }
}

export default Login
