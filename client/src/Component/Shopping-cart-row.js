import React, { Component } from 'react'

export class Row extends Component {
  state= {edit: false}
    render() {
           const price = (this.props.shoppingcart.cart_quantity)*(this.props.shoppingcart.current_price)
           const decimalPrice = parseFloat(Math.round(price * 100) / 100).toFixed(2);
           console.log('price',decimalPrice); 
            return (
            
            <tbody> 
            <tr>
                <td>
                <p classsName="image-container">
                        <img className="responsive" src={this.props.shoppingcart.image_path}/> 
                        </p>    
                </td>
                <td>{this.props.shoppingcart.name}</td>
                <td>{this.props.shoppingcart.cart_quantity}</td>
                <td>{this.props.shoppingcart.current_price}</td>
                <td>{decimalPrice}</td>
            </tr>
            </tbody>     
            )
    }
}
export default Row 
