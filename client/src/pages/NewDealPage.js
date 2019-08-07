import React, { Component } from 'react';
import Nav from '../Component/Nav';
import NewDealComp from '../Component/NewDealComp';


export class NewDeal extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <NewDealComp/>
      </div>
    );
  }
}

export default NewDeal;
