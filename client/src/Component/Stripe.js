import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

 
export class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  // ...
 
  render() {
    let stripeKey = ";
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey={stripeKey}
      />
    )
  }
}

export default TakeMoney;