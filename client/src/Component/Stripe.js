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
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_erkimzsfpiATUMptnrxecI7i00Bpky1ynN"
      />
    )
  }
}

export default TakeMoney;