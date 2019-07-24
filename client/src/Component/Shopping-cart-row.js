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
                <p classsName="image-container">
                <img className="responsive" src={this.props.shoppingcart.image_path}/> 
                </p>    
                </td>
                <td>{this.props.shoppingcart.name}</td>
                <td><i class="tiny material-icons" onClick={() => this.props.removeOneCartItem(this.props.shoppingcart)}>remove</i>  {this.props.shoppingcart.cart_quantity}  <i class="tiny material-icons" onClick={() => this.props.addOneCartItem(this.props.shoppingcart)}>add</i></td>
                <td>{this.props.shoppingcart.current_price}</td>
                <td>{decimalPrice}</td>
                <td><button class="waves-effect waves-light btn" onClick={() => this.props.deleteCartItem(this.props.shoppingcart.id)}>delete</button></td>
            </tr>
            </tbody>     
            )
    }
}
export default Row; 
