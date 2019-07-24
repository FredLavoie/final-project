import React, { Component } from 'react';
import Nav from '../Component/Nav';
import MerchantComponent from '../Component/Merchant';
import Footer from '../Component/Footer';

export class Merchant extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <MerchantComponent/>
        <Footer/>
      </div>
    );
  }
}

export default Merchant;