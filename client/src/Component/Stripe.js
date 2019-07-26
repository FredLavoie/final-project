import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
 
export class TakeMoney extends React.Component {
  state = {
    redirect:false
  }
  onToken = (token) => {
    token["amount"] = parseInt(this.props.price.toString().split('.').join(''));
    console.log('token is this: ',localStorage.getItem('token'))
    fetch('/api/payments/save-stripe-token', {
      method: 'POST',
      headers:{ "Content-Type" : "application/json" ,
      Authorization: localStorage.getItem('token')
    },
      body: JSON.stringify(token),
    }).then(response => {

      console.log('res', response);
      if(response.ok){
        
        fetch('/api/orders/create', {
          method:'POST',
          headers:{ "Content-Type" : "application/json" },
          body: JSON.stringify({ cart: JSON.parse(localStorage.getItem('saveShoppingcart')),  userId: JSON.parse(localStorage.getItem('user_id')), total: JSON.parse(this.props.priceDecimal) })
         
        }).then(function(response) {
          return response.json();
        }).then( 


        )
        

          //delete cart (need to create function that update state and then call local storage)
          localStorage.removeItem('saveShoppingcart')        
        }
    });
  }
 
 
  render() {
    return (
      <StripeCheckout
      amount={this.props.price}
        token={this.onToken}
        stripeKey="pk_test_erkimzsfpiATUMptnrxecI7i00Bpky1ynN"

        label="Checkout"
        style={{margin: "20px 20px 20px 100px"}}
      />
    )
  }
}

export default TakeMoney;
