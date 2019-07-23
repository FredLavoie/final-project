import React, { Component } from 'react'
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import MainShoppingCart from '../Component/Main-shopping-cart'

export class ShoppingCart extends Component {
  constructor(props){
    super(props)

}

    render() {
     console.log("shopping", this.props.shoppingcart)
      return (
        <div>
          <Nav /> 
          <MainShoppingCart shoppingCart={this.props.shoppingcart} />
          <Footer />
        </div>
      )
    }
  }
  
  export default ShoppingCart