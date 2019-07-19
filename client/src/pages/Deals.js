import React, { Component } from 'react'
import Nav from '../Component/Nav';
import DealsComponent from '../Component/Deals';
import Footer from '../Component/Footer';

 class Deals extends Component {
  render() {
    return (
      <div>
      <Nav/>
      <DealsComponent />
      <Footer/>
      </div>
    )
  }
}

export default Deals
