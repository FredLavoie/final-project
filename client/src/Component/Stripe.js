import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
 
export class TakeMoney extends React.Component {
  state = {
    redirect:false
  }
  onToken = (token) => {
    token["amount"] = parseInt(this.props.price.toString().split('.').join(''));
    console.log('token',localStorage.getItem('token'))
    fetch('/api/payments/save-stripe-token', {
      method: 'POST',
      headers:{ "Content-Type" : "application/json" ,
      Authorization: localStorage.getItem('token')
    },
      body: JSON.stringify(token),
    }).then(response => {
      console.log('res', response); 
      if(response.ok){
        //send to backend 
          const cardDelete = localStorage.removeItem('saveShoppingcart')        }
    });
  }
 
 
  render() {
    return (
      <StripeCheckout
      amount={this.props.price}
        token={this.onToken}
        stripeKey="pk_test_xyzuV3eSI7O71o5N8zJp4Kea00ZTb5iMQI"
        label="Checkout"
        style={{margin: "16px"}}
      />
    )
  }
}

export default TakeMoney;
