import React, { Component } from 'react'

export class Row extends Component {
  state= {edit: false}
    render() {
            console.log("quantity", this.props.shoppingcart.cart_quantity)

            //create a map
        let quantity = this.props.entireshoppingcart.filter((object) => {
            if (this.props.shoppingcart.id === object.id){
              return(object)    
            }
          }
         );  
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
                <td>x2</td>
            </tr>
            </tbody>     
            )
    }
}
export default Row 
