import React, { Component } from 'react';
import Nav from '../Component/Nav';
import NewDealComponent from '../Component/New_deal';


export class New_deal extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <NewDealComponent/>
      </div>
    );
  }
}

export default New_deal;
