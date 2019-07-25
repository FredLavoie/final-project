import React, { Component } from 'react';

export class Row extends Component {
  state= {edit: false}
    render() {
     const price = (this.props.shoppingcart.cart_quantity)*(this.props.shoppingcart.current_price)
     const decimalPrice = parseFloat(Math.round(price * 100) / 100).toFixed(2);
      return (
      
      <tbody> 
      <tr>
          <td>
            <span style={{display: "flex", alignContent: "center", justifyContent: "space-evenly"}}>
              <img className="responsive" src={this.props.shoppingcart.image_path}/> 
            </span> 
          </td>
          <td><span style={{display: "flex", alignContent: "center", justifyContent: "space-evenly"}}>{this.props.shoppingcart.name}</span></td>
          <td><span style={{display: "flex", alignContent: "center", justifyContent: "space-evenly"}}>
            <i className="material-icons" style={{cursor:"pointer"}} onClick={() => this.props.removeOneCartItem(this.props.shoppingcart)}>remove_circle_outline</i>
            { this.props.shoppingcart.cart_quantity }
            <i className="material-icons" style={{cursor:"pointer"}} onClick={() => this.props.addOneCartItem(this.props.shoppingcart)}>add_circle_outline</i>
          </span></td>
          <td><span style={{display: "flex", alignContent: "center", justifyContent: "space-evenly"}}>${this.props.shoppingcart.current_price}</span></td>
          <td><span style={{display: "flex", alignContent: "center", justifyContent: "space-evenly"}}>$ {decimalPrice}</span></td>
          <td><span style={{display: "flex", alignContent: "center", justifyContent: "space-evenly"}}><button className="waves-effect waves-light btn" onClick={() => this.props.deleteCartItem(this.props.shoppingcart.id)}>delete</button></span></td>
      </tr>
      </tbody>     
      )
    }
}
export default Row; 
