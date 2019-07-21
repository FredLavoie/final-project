import React, { Component } from 'react'

export class Row extends Component {
    render() {
        return (
        <tbody>
          <tr>
            <td>
            <tr classsName="image-container">
                    <img className="responsive" src={this.props.deal.image_path}/> 
                    </tr>
            </td>
            <td>{this.props.deal.name}</td>
            <td>{this.props.deal.quantity_available}</td>
            <td>{this.props.deal.current_price}</td>
            <td>09/10/19</td>
            <td>
            <a class="waves-effect waves-light btn">delete</a>
            </td>
            <td>
            <a class="waves-effect waves-light btn">edit</a>
            </td>
          </tr>
        </tbody>     
        )
    }
}
export default Row 
