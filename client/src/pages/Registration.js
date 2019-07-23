import React, { Component } from 'react';
import Nav from '../Component/Nav';
import RegistrationComponent from '../Component/Registration';
import Footer from '../Component/Footer';

export class Registration extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <RegistrationComponent/>
        <Footer/>
      </div>
    );
  }
}

export default Registration;
