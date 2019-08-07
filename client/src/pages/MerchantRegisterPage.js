import React, { Component } from 'react';
import Nav from '../Component/Nav';
import MerchantRegister from '../Component/MerchantRegister';

export class MerchantRegisterPage extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <MerchantRegister />
      </div>
    );
  }
}

export default MerchantRegisterPage;