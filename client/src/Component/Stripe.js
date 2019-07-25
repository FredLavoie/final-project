import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
 
export class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/api/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  // handleToken(token, addresses){
  //   console.log({token, addresses})
  //   this.onToken(token); 
  //   console.log('After calling function to send data to backend')
  // }
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_xyzuV3eSI7O71o5N8zJp4Kea00ZTb5iMQI"
        amount={20.00 * 100}
      />
    )
  }
}

export default TakeMoney;