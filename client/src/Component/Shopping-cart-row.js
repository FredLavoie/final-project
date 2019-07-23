import React, { Component } from 'react'

export class Row extends Component {
  state= {edit: false}
    render() {
        if (true){
            //if(this.props.shoppingdcart.id = )
            console.log("deal_id", this.props.shoppingcart.id)
            console.log("shopping_cart", this.props.entireshoppingcart)
            return (
            
            <tbody>
            <tr>
                <td>
                <tr classsName="image-container">
                        <img className="responsive" src={this.props.shoppingcart.image_path}/> 
                        </tr>
                </td>
                <td>{this.props.shoppingcart.name}</td>
                <td>X</td>
                <td>{this.props.shoppingcart.current_price}</td>
                <td>x2</td>
            </tr>
            </tbody>     
            )
        }
    }
}
export default Row 
