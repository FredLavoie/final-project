import React, { Component } from 'react';
import Nav from '../Component/Nav';


export class MerchantDashboard extends Component {
  // constructor(props){
  //   super(props);
  // }
  
  render() {
  
    return (
      <div>
        <Nav /> 
        <main className="main-page">
        <p>Thank you for your order!</p>
        </main>
      </div>
    );
  }
}
  
export default MerchantDashboard;