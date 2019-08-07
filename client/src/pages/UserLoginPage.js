import React, { Component } from 'react';
import Footer from '../Component/Footer';
import Nav from '../Component/Nav';
import Login from '../Component/User_login';

export class UserLogin extends Component {
  render() {
    return (
      <div>
     <Nav />
     <Login />
     <Footer />
     </div>
    );
  }
}

export default UserLogin;
