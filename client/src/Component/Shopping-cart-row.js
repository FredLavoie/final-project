import React, { Component } from 'react'

export class Row extends Component {
  state= {edit: false}
    render() {
        console.log('what is in row', this.props.shoppingcart)
        return (
        <tbody>
          <tr>
            <td>
            <tr classsName="image-container">
                    <img className="responsive" alt="" src={this.props.shoppingcart.image_path}/> 
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
export default Row 
