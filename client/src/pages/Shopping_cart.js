import React, { Component } from 'react'
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import MainShoppingCart from '../Component/Main-shopping-cart'
import M from "materialize-css";

export class ShoppingCart extends Component {
  constructor(props){
    super(props)
    this.state = {
     }

}

componentDidMount() {
  
}

    render() {
     
      return (
        <div>
          <Nav /> 
          <MainShoppingCart />
          <Footer />
        </div>
      )
    }
  }
  
  export default ShoppingCart