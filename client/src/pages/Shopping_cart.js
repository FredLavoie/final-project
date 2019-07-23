import React, { Component } from 'react'
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import MainShoppingCart from '../Component/Main-shopping-cart'

export class ShoppingCart extends Component {
  constructor(props){
    super(props)

}

    render() {
      return (
        <div>
          <Nav /> 
        <MainShoppingCart shoppingCart={this.props.shoppingcart}  deleteCartItem={this.props.deleteCartItem} removeOneCartItem={this.props.removeOneCartItem} />
          <Footer />
        </div>
      )
    }
  }
  
  export default ShoppingCart