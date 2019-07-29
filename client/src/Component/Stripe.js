import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
 
export class TakeMoney extends React.Component {
  state = {
    redirect:false,
    userEmail: "",
  }
  onToken = (token) => {
    token["amount"] = parseInt(this.props.price.toString().split('.').join(''));
    fetch('/api/payments/save-stripe-token', {
      method: 'POST',
      headers:{ "Content-Type" : "application/json" ,
      Authorization: localStorage.getItem('token')
    },
      body: JSON.stringify(token),
    }).then(response => {

      if(response.ok){
        fetch('/api/orders/create', {
          method:'POST',
          headers:{ "Content-Type" : "application/json" },
          body: JSON.stringify({ 
            cart: JSON.parse(localStorage.getItem('saveShoppingcart')),
            userId: JSON.parse(localStorage.getItem('user_id')),
            total: JSON.parse(this.props.priceDecimal)
          })
        
        }).then(function(response) {
          return response.json();
          
        });        
        
        //delete cart (need to create function that update state and then call local storage)
          window.location.assign('/order');
          localStorage.removeItem('saveShoppingcart')        
        }
    });
  }

  userEmail = async (id) => {
    const query = await fetch(`/api/users/${id}`, {
      method: 'GET',
      headers: {"Content-Type" : "application/json", 'Authorization' : localStorage.getItem('token') },
    })
    if(query.ok) {
      let response = await query.json();
      this.setState({userEmail: response.email})
    }
  }
 
  componentDidMount() {
    this.userEmail(localStorage.getItem('user_id'));
  }


  render() {
    return (
      <StripeCheckout
        amount={this.props.price}
        token={this.onToken}
        stripeKey="pk_test_xyzuV3eSI7O71o5N8zJp4Kea00ZTb5iMQI"
        label="Checkout"
        email={this.state.userEmail}
        style={{margin: "20px 20px 20px 100px", "& span":{ background: "red"}}}
      />
    )
  }
}

export default TakeMoney;
