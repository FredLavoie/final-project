import React, { Component } from 'react'
import Nav from '../Component/Nav';
import Main_merchant from '../Component/Main_merchant';
import Footer from '../Component/Footer';

export class Merchant_dashboard extends Component {
    render() {
      return (
        <div>
          <Nav />
          <Main_merchant /> 
          <Footer />
        </div>
      )
    }
  }
  
  export default Merchant_dashboard
  