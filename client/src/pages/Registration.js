import React, { Component } from 'react';
import Nav from '../Component/Nav';
import RegistrationComponent from '../Component/Registration';


export class Registration extends Component {
  render() {
    return (
      <div >
        <Nav/>
        <RegistrationComponent/>
      </div>
    );
  }
}

export default Registration;
