import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
 
export class TakeMoney extends React.Component {
  onToken = (token) => {
    token["amount"] = parseInt(this.props.price.toString().split('.').join(''));
    fetch('/api/payments/save-stripe-token', {
      method: 'POST',
      headers:{ "Content-Type" : "application/json" },
      body: JSON.stringify(token),
    }).then(response => console.log(response));
  }
 
 
  render() {
    return (
      <StripeCheckout
      amount={this.props.price}
        token={this.onToken}
        stripeKey="pk_test_xyzuV3eSI7O71o5N8zJp4Kea00ZTb5iMQI"
        label="Checkout"
        style={{margin: "20px 20px 20px 100px"}}
      />
    )
  }
}

export default TakeMoney;