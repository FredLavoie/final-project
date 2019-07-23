import React, { Component } from 'react'

export class Row extends Component {
  state= {edit: false}
    render() {
            console.log("shopping_cart", this.props.entireshoppingcart)

            //create a map
        let quantity = this.props.entireshoppingcart.filter((object) => {
            if (this.props.shoppingcart.id === object.id){
              return(object)    
            }
          }
         );
            console.log('quantity',quantity.length);      
            return (
            
            <tbody> 
            <tr>
                <td>
                <p classsName="image-container">
                        <img className="responsive" src={this.props.shoppingcart.image_path}/> 
                        </p>    
                </td>
                <td>{this.props.shoppingcart.name}</td>
                <td>{quantity.length}</td>
                <td>{this.props.shoppingcart.current_price}</td>
                <td>x2</td>
            </tr>
            </tbody>     
            )
    }
}
export default Row 
