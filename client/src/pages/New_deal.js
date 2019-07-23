import React, { Component } from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import NewDealComponent from '../Component/New_deal';


export class New_deal extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <NewDealComponent/>
        <Footer/>
      </div>
    );
  }
}

export default New_deal;
